import axios from 'axios';

// get available coins from crypto-compare
const getCoins = async() => {
    const res = await axios({
        url: 'https://min-api.cryptocompare.com/data/blockchain/list',
        method: 'GET',
        headers: {
            'authorization': `Apikey ${process.env.REACT_APP_CRYPTO_API_KEY}`
        }
    });

    // return array of available currencies
    return Object.keys(res.data.Data);
}

// get prices of the coins passed in the argument from crypto-compare
const getPrices = async coins => {
    const res = await axios({
        url: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coins.toString()}&tsyms=INR`,
        method: 'GET',
        headers: {
            'authorization': `Apikey ${process.env.REACT_APP_CRYPTO_API_KEY}`
        }
    });

    return res.data;
}

// get recent comparisons from history
const getComparisons = async() => {
    const res = await axios({
        url: `${process.env.REACT_APP_API_URI}`,
        method: 'GET',
    });

    return res;
}

// store a comparison into db
const postComparison = async(coins) => {
    const res = await axios({
        url: `${process.env.REACT_APP_API_URI}`,
        method: 'POST',
        data: {
            coins: JSON.stringify(coins)
        }
    });

    return res;
}

export {
    getCoins,
    getPrices,
    getComparisons,
    postComparison
}