import { NextPage } from 'next';
import { useMutation, useQuery } from '../lib/react-query';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {

	const [txnId, setTxnId] = useState(1);

	const vehicletypes = useQuery({
		operationName: 'parking/queries/VehicleTypes',
		// input: { where: { code: { equals: "4W" }, }, },
	});

	const parkingRates = useQuery({
		operationName: 'parking/queries/ParkingRatesAndRelations',
	});

	const parkingTransactions = useQuery({
		operationName: 'parking/queries/ParkingTransactionsAndRelations',
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

	function finishParking(txnId: string) {
		console.log('finishParking()');
		finishParkingTransactionMutation.mutateAsync({
			parkingTransactionId: txnId,
		});
	}

	  
	return (
		<div>
			
			Start Parking:  
			<button className="border-solid border-2 bg-sky-400 rounded-lg p-2 m-5" onClick={ () => startParking('2W')}> 2-wheels </button>
			<button className="border-solid border-2 bg-sky-400 rounded-lg p-2 m-5" onClick={ () => startParking('4W')}> 4-wheels </button>

			<button className="border-solid border-2 bg-red-400 rounded-lg p-2 m-5" onClick={ () => { finishParking(txnId) } }> 
				<input value={txnId} onChange={ e => setTxnId( e.target.value ? parseInt(e.target.value) : 1 )} size={3} type="text"/>
				&nbsp;
				Finish Parking & Compute 
			</button>
			txnId: { txnId }

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
