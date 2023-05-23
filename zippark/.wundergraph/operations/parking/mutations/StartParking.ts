import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
import crypto from "crypto"

import { PrismaClient } from '@prisma/client'
import { InternalError } from '@wundergraph/sdk/dist/client/errors';
const prisma = new PrismaClient()

import { createOperation, z } from '../../../generated/wundergraph.factory';


function timeDiffToNow(dateTimeStart: string) {
	/**
	 * rounds to nearest integer
	 *  - ex: 5.4 => 5, 5.5 => 6
	 */
	const datetimeStart = Temporal.PlainDateTime.from(dateTimeStart.replace('Z',''));
	const datetimeNow = Temporal.Now.plainDateTimeISO();

	const diff = datetimeNow.since(datetimeStart);
	const diffWithDecimalMinutes = diff.hours + ( diff.minutes / 40);

	return diffWithDecimalMinutes;
}

function make3Letters(): string {
	/*
		output samples: 'ABC', 'GTX', 'ZCX'
	*/
	return crypto.randomUUID().replace(/[0-9-]/g, '').substring(0,3).toUpperCase()
}


export default createOperation.mutation({
	input: z.object({
		vehicleCode: z.string(),
		entranceCode: z.string(),
	}),
	handler: async ({ input, operations }) => {
		console.log("input", input);
		/**
		 * Inserts a new parking transaction
		 *  - (a) gets the id of the active parking rate first before insert of record
		 * 	- (b) write the new parking transaction
		 * 		- start time is current time
		 */

		// (a)
		const parkingRate = await prisma.parking_rates.findFirst( { 
			select: { 
				id: true,
				is_active: true
			},  
			where: { 	
				is_active: true, 
				vehicle_types: { 
					is: { code: input.vehicleCode } 
				} 
			} 
		});
		
		const entrance = await prisma.entrances.findFirst( { 
			select: { 
				id: true,
				code: true,
				name: true,
			},  
			where: { 	
				code: input.entranceCode,
			} 
		});
		console.log('++++++++++++++++++++++++++++++++==');
		console.log(entrance);
		if (!entrance || !entrance?.id) {
			throw new InternalError({ message: 'unexpected entrance code'});
		}

		if (!parkingRate) {
			throw new InternalError({ message: 'undefined parkingRate'});
		}

		// (b)
		const data = { 
			vehicle_plate: make3Letters() + ' 222',
			amount: undefined, // to update on finish of parking
			parking_rate: parkingRate.id,
			entrance: entrance?.id,
		}

		const newParkingTxn = await prisma.parking_transactions.create({ data: data });
		if (!newParkingTxn) {
			throw new InternalError({ message: 'failed to create on parking_transacion'});
		}

		const response = {
			id: newParkingTxn.id,
			created_at: newParkingTxn.created_at,
			vehicle_plate: newParkingTxn.vehicle_plate,
			datetime_in: newParkingTxn.datetime_in,
			datetime_out: newParkingTxn.datetime_out,
			amount: newParkingTxn.amount,
			parkingRate: newParkingTxn.parking_rate,
			entrance: newParkingTxn.entrance,
		}

		return response;
	},
});
