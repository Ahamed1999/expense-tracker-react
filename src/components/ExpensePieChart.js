import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpensePieChart({ expensesData }) {
  const getCategoryTotals = (data) => {
    const categoryMap = {};
    data.forEach(item => {
      const category = item.category || 'Other';
      categoryMap[category] = (categoryMap[category] || 0) + Number(item.amount);
    });
    return {
      labels: Object.keys(categoryMap),
      values: Object.values(categoryMap)
    };
  };

  const { labels, values } = getCategoryTotals(expensesData || []);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          '#f44336', '#2196f3', '#ff9800', '#4caf50', '#9c27b0', '#00bcd4'
        ],
        borderWidth: 1
      }
    ]
  };

  return <Pie data={chartData} />;
}

export default ExpensePieChart;