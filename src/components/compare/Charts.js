import { Bar, Line, PolarArea } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    RadialLinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { getBarData, getPolarData } from '../../utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Charts = ({ prices }) => {
    
    if (!prices || Object.keys(prices).length < 2) {
        return <p>...</p>
    }

    const chartData = getBarData(prices);
    const polarData = getPolarData(prices);

    return (
        <div style={{ width: '60%', marginTop: '50px' }}>
            <Bar data={chartData} />
            <Line data={chartData} />
            <PolarArea data={polarData} />
        </div>
    );
}

export default Charts;