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
		console.log("operations", operations);
		/**
		 * Compute total parking amount owed
		 * 	- total = fixed amount + ( hours * variable amount) 
		 */

		return {
			x: 4422,
			// ...updated,
		};
	},
});
