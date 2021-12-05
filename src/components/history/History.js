import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import styles from './History.module.css';
import { getComparisons } from '../../actions'

const History = () => {

    const [comparisons, setComparisons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAndUpdateComparisons();

    }, []);

    // fetches comparisons from db
    const getAndUpdateComparisons = async () => {
        const res = await getComparisons();
        if (res.status === 200) {
            setComparisons(res.data.comparisons);
        }
    }
    
    // navigate to home with corresponding coins
    const handleClick = (comparison) => {
        navigate('/', { state: JSON.parse(comparison.coins) })
    }

    const showComparisons = () => (
        comparisons.map(comparison => (
            <div key={comparison._id} onClick={() => handleClick(comparison)} className={styles.comparison}>
                {comparison.coins.replace(/[\[\]]/g, '')}
            </div>
        ))
    )

    return (
        <div className={styles.container}>
            <h4>Recent Comparisons</h4>
            {showComparisons()}
        </div>
    );
}

export default History;