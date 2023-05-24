import { NextPage } from 'next';
import { useMutation, useQuery } from '../lib/react-query';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {

	const [txnId, setTxnId] = useState(1);
	const [entranceCode, setEntranceCode] = useState('ENT01');

	const entrances = useQuery({
		operationName: 'parking/queries/Entrances',
	});

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

	async function startParking(vCode: string, entranceCode: string) {
		startParkingTransactionMutation.mutateAsync({
			vehicleCode: vCode, // '2W'|'4W'
			entranceCode: entranceCode, // '2W'|'4W'
		});
	}

	const finishParkingTransactionMutation = useMutation({
		operationName: 'parking/mutations/FinishParking',
	})	  

	function finishParking(txnId: string) {
		finishParkingTransactionMutation.mutateAsync({
			parkingTransactionId: txnId,
		});
	}

	  
	return (
		<div>
			&nbsp;&nbsp;&nbsp;
			[START] Entrance:  <input  className="border-solid border-2 rounded-sm p-2 m-5"
								value={entranceCode} onChange={ e => setEntranceCode( e.target.value ? e.target.value : 'ENT01' )} size={3} type="text"
						/>


			 
			<button className="border-solid border-2 bg-sky-400 rounded-sm p-2 m-5" onClick={ () => startParking('2W', entranceCode)}> 2-wheels </button>
			<button className="border-solid border-2 bg-sky-400 rounded-sm p-2" onClick={ () => startParking('4W', entranceCode)}> 4-wheels </button>

			<br/>

			&nbsp;&nbsp;&nbsp;
			[ END ]
			existing txn id: <input className="border-solid border-2 rounded-sm p-2 m-5"
									value={txnId} onChange={ e => setTxnId( e.target.value ? parseInt(e.target.value) : 1 )} size={3} type="text"
							/>
			<button className="border-solid border-2 bg-red-400 rounded-sm p-2" onClick={ () => { finishParking(txnId.toString()) } }> 
				&nbsp;
				Finish Parking & Compute 
			</button>


			<br/>
			----------------------------------------------------------------------------
			<br/>

			Entrances:
			<br/>
			<br/>
				<div className="pl-10"> 
				{ entrances.data ? JSON.stringify(entrances.data) : '......Loading......' }	
				</div>
			<br/>
			----------------------------------------------------------------------------
			<br/>

			parkingRates:
			<br/>
			<br/>
				<div className="pl-10"> 
				{ parkingRates.data ? JSON.stringify(parkingRates.data) : '......Loading......' }	
				</div>

			<br/>
			----------------------------------------------------------------------------
			<br/>

			vehicletypes:
			<br/>
			<br/>
				<div className="pl-10"> 
				{ vehicletypes.data ? JSON.stringify(vehicletypes.data) : '......Loading......' }	
				</div>
			<br/>
			----------------------------------------------------------------------------
			<br/>

			Transactions:
			<br/>
			<br/>
				<div className="pl-10"> 
				{ parkingTransactions.data ? JSON.stringify(parkingTransactions.data) : '......Loading......' }	
				</div>
			<br/>
			----------------------------------------------------------------------------
			<br/>
			<br/>
			<br/>

		</div>

	);
};

export default Home;
