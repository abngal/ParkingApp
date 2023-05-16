import { createOperation, z } from '../../../generated/wundergraph.factory';
import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';

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

export default createOperation.mutation({
	input: z.object({
		vehicleCode: z.string(),
	}),
	handler: async ({ input, operations }) => {
		console.log("input", input);
		/**
		 * Inserts a new parking transaction
		 * 	- start time is current time
		 *  - gets the id of the active parking rate first before insert of record
		 */

		const responseVehicleType = await operations.query({ 
			operationName: 'parking/queries/ParkingRatesAndRelations',
			input: { where: { 
				vehicle_types: { is: { code: { equals: input.vehicleCode }  } }, 
				is_active: { equals: true },
			}},
		});
		const [activeParkingRateId] : any|undefined[] = responseVehicleType.data?.pgdb_findManyparking_rates; 
		// console.log("responseVehicleType.datapgdb_findManyparking_rates:", responseVehicleType.data?.pgdb_findManyparking_rates);
		console.log("activeParkingRateId", activeParkingRateId);

		// const whereFilter = { where: { id: { equals: "2" }, } };
		// const parkingTransaction = await operations.query({ 
		// 	operationName: 'parking/ParkingTransactionsAndRelated',
		// 	input: whereFilter,
		// });
		// const [txn] : any|undefined[] = parkingTransaction.data?.pgdb_findManyparking_transactions 
		// if (!txn) return { emptyTransaction: true }

		// let timeDiffInHours: number = timeDiffToNow(txn.datetime_in);
		// timeDiffInHours = Math.round(timeDiffInHours);

		// const totalAmount = txn.parking_rates.min_amount + timeDiffInHours * txn.parking_rates.variable_amount;

		return {
			x: 4422,
			...input,
		};
	},
});
