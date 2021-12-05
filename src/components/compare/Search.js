import { useState, useEffect } from 'react';

import styles from './Search.module.css';
import { getCoins } from "../../actions";

const Search = ({ selectedCoins, setSelectedCoins }) => {
    
    const [search, setSearch] = useState('');
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        updateDataList();
    }, []);

    // gets available coins from crypto-compare and updates the data list
    const updateDataList = async () => {
        const res = await getCoins();
        setDataList(res);
    }

    const handleAdd = () => {
        setSelectedCoins([
            ...selectedCoins,
            search
        ]);
    }

    const handleDelete = coin => {
        setSelectedCoins(selectedCoins.filter(selectedCoin => selectedCoin !== coin));
    }

    const showSelectedCoins = () => (
        selectedCoins.map(coin => (
            <div onClick={() => handleDelete(coin)} className={styles.coin} key={coin}>
                {coin}
            </div>
        ))
    )
    
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <input 
                    type='text' 
                    list='data' 
                    value={search}
                    onChange={e => setSearch(e.target.value)} 
                />
                {/* sets available options for input */}
                <datalist id='data'>
                    {dataList.map(item => (
                        <option key={item} value={item} />
                    ))}
                </datalist>
                <button onClick={handleAdd}>Add</button>
            </div>
            <div className={styles.selected}>
                {showSelectedCoins()}
            </div>
        </div>        
    );
}

export default Search;