import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function SavingsPieChart({ savingsData }) {
  const getPurposeTotals = (data) => {
    const purposeMap = {};
    data.forEach(item => {
      const purpose = item.purpose || 'Other';
      purposeMap[purpose] = (purposeMap[purpose] || 0) + Number(item.amount);
    });
    return {
      labels: Object.keys(purposeMap),
      values: Object.values(purposeMap)
    };
  };

  const { labels, values } = getPurposeTotals(savingsData || []);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          '#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#00bcd4', '#f44336', '#795548', '#607d8b'
        ],
        borderWidth: 1
      }
    ]
  };

  return <Pie data={chartData} />;
}

export default SavingsPieChart;