import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';

import { PrismaClient } from '@prisma/client'
import { InternalError } from '@wundergraph/sdk/dist/client/errors';
const prisma = new PrismaClient()

import { createOperation, z } from '../../../generated/wundergraph.factory';


function timeDiffToNow(dateTimeStart: string, temporalNow: Temporal.PlainDateTime) {
	
	/**
	 * rounds to nearest integer
	 *  - ex: 5.4 => 5, 5.5 => 6
	 */
	const datetimeStart = Temporal.PlainDateTime.from(dateTimeStart.replace('Z',''));

	const diff = temporalNow.since(datetimeStart);
	const diffWithDecimalMinutes = diff.hours + ( diff.minutes / 40);

	return diffWithDecimalMinutes;
}

export default createOperation.mutation({
	input: z.object({
		parkingTransactionId: z.string(),
	}),
	handler: async ({ input, operations }) => {
		console.log("input", input);
		/**
		 * Compute total parking amount owed
		 * 	- total = fixed amount + ( hours * variable amount) 
		 */
		// const vehicleTypeResponse = await operations.query({ 
		// 	operationName: 'parking/VehicleTypes',
		// 	input: { where: { code: { equals: input.vehicleCode }, } },
		// });
		// const [vehicleCode] : any|undefined[] = vehicleTypeResponse.data?.pgdb_findManyvehicle_types 

		// const whereFilter = { where: { id: { equals: "2" }, } };
		// const parkingTransaction = await operations.query({ 
		// 	operationName: 'parking/queries/ParkingTransactionsAndRelations',
		// 	input: whereFilter,
		// });
		// const [txn] : any|undefined[] = parkingTransaction.data?.pgdb_findManyparking_transactions 
		// if (!txn) return { emptyTransaction: true }

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
		console.log("................txn", txn);

		
		if (!txn || !txn.parking_rates?.min_amount || !txn.parking_rates?.variable_amount || !txn.parking_rates?.min_hours  ) {
			throw new InternalError({ message: 'Parking Transaction, or its props, are falsy '});
		}


		// let temporalNow = Temporal.Now.plainDateTimeISO();
		// let timeDiffInHours: number = timeDiffToNow(txn.datetime_in.toISOString(), temporalNow);
		// timeDiffInHours = Math.round(timeDiffInHours);


		// const excessOverMinHours = timeDiffInHours - txn.parking_rates?.min_hours 
		// let totalAmount = txn.parking_rates?.min_amount
		// if (txn.parking_rates?.min_hours > ) {
		// 	totalAmount += excessOverMinHours * txn.parking_rates?.variable_amount 
		// }
		// console.log("totalAmount", totalAmount);

		// const data = { 
		// 	amount: totalAmount, // to update on finish of parking
		// 	datetime_out: temporalNow,
		// }
		
		// const updatedParkingTxn = prisma.UpdateOneParkingTransaction();

		return {
			x: 4422,
			...input,
		};
	},
});
