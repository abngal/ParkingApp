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

	const startParkingTransactionMutation = useMutation({
		operationName: 'parking/mutations/StartParking',
	})

	async function startParking(vCode: string) {
		console.log('startParking() ....');
		startParkingTransactionMutation.mutateAsync({
			vehicleCode: vCode, // '2W'|'4W'
		});
	}

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
			
			
			Start Parking:  
			<button className="border-solid border-2 rounded-lg p-2 m-5" onClick={ () => startParking('2W')}> 2-wheels </button>
			<button className="border-solid border-2 rounded-lg p-2 m-5" onClick={ () => startParking('4W')}> 4-wheels </button>
			<button className="border-solid border-2 rounded-lg p-2 m-5" onClick={finishParking}> Finish Parking & Compute </button>
			

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

		</div>

	);
};

export default Home;
