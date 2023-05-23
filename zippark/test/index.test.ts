import { afterAll, beforeAll, describe, expect, test } from '@jest/globals';
import fetch from 'node-fetch';
import { createTestServer } from '../.wundergraph/generated/testing';

const wg = createTestServer({ fetch: fetch as any });
beforeAll(() => wg.start());
afterAll(() => wg.stop());

describe('Test Entrances Operation - Graphql', () => {
	test('must return 2 records from database', async () => {
		const result = await wg.client().query({
			operationName: 'parking/queries/Entrances',
		});
		console.log("result", result);

		expect(result.error).toBeFalsy();
		expect(result.data?.pgdb_findManyentrances?.length).toBe(2);
	});

	// TODO: test other operations, especially typescript ones ( not just graphql )
});
