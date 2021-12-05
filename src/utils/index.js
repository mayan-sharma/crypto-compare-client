// generates a random color
const getRandomColor = () => (
    `rgba(${255*Math.random()},${255*Math.random()},${255*Math.random()})`
);

// pre-process data for line and bar chart
const getBarData = prices => {
    return {
        labels: [`${new Date()}`],
        datasets: Object.keys(prices).map(key => ({
            label: key,
            data: [prices[key].INR],
            backgroundColor: getRandomColor()
        }))
    }
}

// pre-process data for polar area chart
const getPolarData = prices => {
    return {
        labels: Object.keys(prices),
        datasets: [{
            label: 'PolarArea Chart',
            data: Object.keys(prices).map(key => prices[key].INR),
            backgroundColor: Object.keys(prices).map(() => getRandomColor()),
            borderWidth: 1
        }]
    }
}

export { getBarData, getPolarData };