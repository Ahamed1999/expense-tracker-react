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

function MonthlyTrendChart({ incomeData, expensesData }) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  const getMonthlyTotals = (data) => {
    const totals = new Array(6).fill(0);
    data.forEach(item => {
      const date = new Date(item.date);
      const monthIndex = date.getMonth();
      if (monthIndex >= 0 && monthIndex < 6) {
        totals[monthIndex] += Number(item.amount);
      }
    });
    return totals;
  };

  const incomeTotals = getMonthlyTotals(incomeData || []);
  const expenseTotals = getMonthlyTotals(expensesData || []);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Income',
        data: incomeTotals,
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.3
      },
      {
        label: 'Expenses',
        data: expenseTotals,
        borderColor: '#f44336',
        backgroundColor: 'rgba(244, 67, 54, 0.2)',
        tension: 0.3
      }
    ]
  };

  return <Line data={chartData} />;
}

export default MonthlyTrendChart;