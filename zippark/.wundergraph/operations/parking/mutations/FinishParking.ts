import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';

import { PrismaClient } from '@prisma/client'
import { InternalError } from '@wundergraph/sdk/dist/client/errors';

import { createOperation, z } from '../../../generated/wundergraph.factory';

const prisma = new PrismaClient()


function timeDiffToNow(dateTimeStart: string, temporalNow: Temporal.PlainDateTime) {
	/**
	 * rounds to nearest integer
	 *  - ex: 5.4 => 5, 5.5 => 6
	 */

	const datetimeStart = Temporal.PlainDateTime.from(dateTimeStart.replace('Z',''));

	const diff = temporalNow.since(datetimeStart);
	const diffWithDecimalMinutes = diff.hours + ( diff.minutes / 60);
	return diffWithDecimalMinutes;
}

export default createOperation.mutation({
	input: z.object({
		parkingTransactionId: z.string(),
	}),
	handler: async ({ input, operations }) => {
		console.log("input", input);
		// console.log("operations", operations);
		/**
		 * Compute total parking amount owed
		 * 	- total = fixed amount + ( hours * variable amount) 
		 */

		const txn = await prisma.parking_transactions.findFirst( { 
			select: { 
				id: true,
				vehicle_plate: true,
				datetime_in: true,
				datetime_out: true,
				amount: true,
				parking_rates: { 
					include: { vehicle_types: true}  
				}
			},  
			where: { 	
				parking_rates: {
					is: { 
						vehicle_types: {
							is: { code: '2W' }
						}
					}
				}
			}
		});
		
		if (!txn || !txn.parking_rates?.min_amount || !txn.parking_rates?.variable_amount || !txn.parking_rates?.min_hours  ) {
			throw new InternalError({ message: 'Parking Transaction, or its props, are falsy '});
		}

		const temporalNow = Temporal.Now.plainDateTimeISO();
		const timeDiffInHours: number = timeDiffToNow(txn.datetime_in.toISOString(), temporalNow);

		const excessOverMinHours = ( timeDiffInHours - txn.parking_rates?.min_hours ); 
		const hasVariableHours = ( excessOverMinHours > 0 );
		let totalAmount = 0;
		// (a) just the total fixed amount
		let fixedAmount = txn.parking_rates?.min_amount; 		 // (a) base/minimum amount
		totalAmount += fixedAmount;
		// (b) or add variable hours
		if (hasVariableHours) {
			totalAmount += excessOverMinHours * txn.parking_rates?.variable_amount 
		}

		const updateParams = {
			where: { 
				id: 1, 
				// id: parseInt(input.parkingTransactionId, 10), 
			}, 
			data: {
				datetime_out: new Date(Temporal.Now.plainDateTimeISO().toString()),
				amount: Math.round(totalAmount),
			}
		};
		const updated = await prisma.parking_transactions.update(updateParams);
		console.log("typeof updated", typeof updated);

		const response = {
			id: updated.id.toString(),			
			amount: updated.amount,			
			datetime_in: updated.datetime_in,
			datetime_out: updated.datetime_out,
		}
		console.log("response", response);

		// return {
		// 	x: 4422,
		// 	// ...updated,
		// };
		return response;
		// return JSON.stringify(response);
	},
});
