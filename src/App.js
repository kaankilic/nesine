import './App.css';
import Bet from './Components/Bet';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCoupon } from './Context/CouponProvider'
import CouponCard from './Components/CouponCard';
function App() {

	const [isLoading, setLoading] = useState(false)
	const [bets, setBets] = useState([]);
    const { toggleCoupon } = useCoupon();

    const loadBets = async() => {
		try {
			setLoading(true);
			const { data } = await axios.get('https://nesine-case-study.onrender.com/bets'); 
			setBets(data);
		  } catch (error) {
			console.error('Error fetching product list:', error);
		  } finally{
			setLoading(false);
		  }
	}

	useEffect(() => {
		loadBets()
	}, [])

    if(isLoading){
        return (<div className="loading-container">Loading...</div>)
    }

	return (
        <div className="app">
            <div className="bets-container">
                { bets.map(bet => (<Bet data={bet} key={`bet-row-${bet.NID}`} onSelect={toggleCoupon} />)) }

            </div>
            <CouponCard />
        </div>
	);
}

export default App;
