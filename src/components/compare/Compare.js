import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import Search from "./Search";
import Charts from './Charts';
import styles from './Search.module.css';
import { getPrices, postComparison } from '../../actions';

const Compare = () => {

    // check if it has been redirected from history
    const { state } = useLocation();
    
    const [selectedCoins, setSelectedCoins] = useState([]);
    const [prices, setPrices] = useState({});
    const [loading, setLoading] = useState(false);

    // updates prices if redirected from history page
    useEffect(() => {
        if (state) {
            updatePrices(state);
        }
    }, [state]);

    const updatePrices = async (coins) => {
        setLoading(true);
        // get prices of coins from crypto-compare api
        const res = await getPrices(coins);
        setPrices(res);
        setLoading(false);
    }

    const handleCompare = async () => {
        // need to select atleast 1 coin
        if (selectedCoins.length) {
            // update prices
            updatePrices(selectedCoins);
            
            // store current selectedCoins in history
            await postComparison(selectedCoins);
        }
    }

    return (
        <div className={styles.container}>
            <Search 
                selectedCoins={selectedCoins} 
                setSelectedCoins={setSelectedCoins} 
            />
            <button onClick={handleCompare}>Compare</button>
            { loading ? <p>Loading</p> : <Charts prices={prices} /> }
        </div>
    );
}

export default Compare;