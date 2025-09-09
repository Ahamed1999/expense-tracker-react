import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

function IncomeTrendChart({ incomeData }) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getMonthlyTotals = (data) => {
    const totals = new Array(12).fill(0);
    data.forEach(item => {
      const monthIndex = new Date(item.date).getMonth();
      totals[monthIndex] += Number(item.amount);
    });
    return totals;
  };

  const incomeTotals = getMonthlyTotals(incomeData || []);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Income',
        data: incomeTotals,
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.3
      }
    ]
  };

  return <Line data={chartData} />;
}

export default IncomeTrendChart;