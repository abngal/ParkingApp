import { NextPage } from 'next';
import { useMutation, useQuery } from '../lib/react-query';

const Home: NextPage = () => {

	const vehicletypes = useQuery({
		operationName: 'parking/VehicleTypes',
		input: { 
			where: { 
				// code: { equals: "4W" }, 
			}, 
		},
	});

	const parkingRates = useQuery({
		operationName: 'parking/queries/ParkingRatesAndRelations',
		input: { 
			where: { 
				// id: { equals: "1" }, 
			}, 
		},
	});

	const parkingTransactions = useQuery({
		operationName: 'parking/queries/ParkingTransactionsAndRelations',
		input: { 
			where: { 
				// id: { equals: "1" }, 
			}, 
		},
		liveQuery: true,
	});

	// const startParkingTransactionMutation = useMutation({
	// 	operationName: 'parking/ParkingTransactionStart',
	// })
	const startParkingTransactionMutation = useMutation({
		operationName: 'parking/mutations/StartParking',
	})

	async function startParking(vCode: string) {
		console.log('startParking() ....');
		startParkingTransactionMutation.mutateAsync({
			vehicleCode: vCode, // '2W'|'4W'
		});

		// const d = {
		// 	data: {
		// 		vehicle_plate: make3Letters() + ' 222',
	
		// 		// a) harcoded but will ideally derive from other tables
		// 			parking_rates: { connect: { id: "2" } },
		// 			vehicle_types: { connect: { id: "1" } } ,
		// 			datetime_out: undefined,
		// 		// 	b) values with defaults
		// 			// created_at: DateTime, // now()
		// 			// datetime_in: DateTime,
		// 		// values to set at finish
		// 			// amount: undefined,
		// 	}
		// }
		// await startParkingTransactionMutation.mutateAsync(d);
	}

	// const finishParkingTransactionMutation = useMutation({
	// 	operationName: 'parking/ParkingTransactionFinish',
	// })	  

	// async function finishParkingTransaction() {
	// 	console.log(',,,,,,,');
	// 	const d = {
	// 		data: {
	// 			// amount: 1111
	// 			amount: { set: 333 }
	// 			// input pgdb_IntFieldUpdateOperationsInput {
	// 				// 	set: Int
	// 				// 	increment: Int
	// 				// 	decrement: Int
	// 				// 	multiply: Int
	// 				// 	divide: Int
	// 			//   }
	// 		},
	// 		where: {
	// 			id: "1" // { equals: "1" } // todo: don't hardcode id
	// 		},
	// 	};
	// 	await finishParkingTransactionMutation.mutateAsync(d);
	// }

	const finishParkingTransactionMutation = useMutation({
		operationName: 'parking/mutations/FinishParking',
	})	  

	function finishParking() {
		console.log('finishParking()');
		finishParkingTransactionMutation.mutateAsync({
			parkingTransactionId: '1',
		});
	}

	  
	return (
		<div>
			

			<br/>
			----------------------------------------------------------------------------
			<br/>

			parkingRates:
			<br/>
			<br/>

				{ JSON.stringify(parkingRates.data) }	


			<br/>
			----------------------------------------------------------------------------
			<br/>

			vehicletypes:
			<br/>
			<br/>

				{ JSON.stringify(vehicletypes.data) }	

			<br/>
			----------------------------------------------------------------------------
			<br/>

			Transactions:
			<br/>
			<br/>

				{ JSON.stringify(parkingTransactions.data) }	

			<br/>
			----------------------------------------------------------------------------
			<br/>
			<br/>
			<br/>

			Start Parking:  
			<button className="border-solid border-2 rounded-lg p-2 m-5" onClick={ () => startParking('2W')}> 2-wheels </button>
			<button className="border-solid border-2 rounded-lg p-2 m-5" onClick={ () => startParking('4W')}> 4-wheels </button>
				{/* <button onClick={startParkingTransaction}> Start Parking - 4-wheels </button> */}
			<br/>
			<br/>
			<button onClick={finishParking}> Finish Parking & Compute </button>
			
			{/* <br/>
			<br/>
			<button onClick={finishParking}> TS OP </button>
			 */}

		</div>

);
};

export default Home;
