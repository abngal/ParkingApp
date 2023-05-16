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

		const whereFilter = { where: { id: { equals: "2" }, } };
		const parkingTransaction = await operations.query({ 
			operationName: 'parking/queries/ParkingTransactionsAndRelations',
			input: whereFilter,
		});
		const [txn] : any|undefined[] = parkingTransaction.data?.pgdb_findManyparking_transactions 
		if (!txn) return { emptyTransaction: true }

		let timeDiffInHours: number = timeDiffToNow(txn.datetime_in);
		timeDiffInHours = Math.round(timeDiffInHours);

		const totalAmount = txn.parking_rates.min_amount + timeDiffInHours * txn.parking_rates.variable_amount;
		console.log("totalAmount", totalAmount);

		return {
			x: 4422,
			...input,
		};
	},
});
