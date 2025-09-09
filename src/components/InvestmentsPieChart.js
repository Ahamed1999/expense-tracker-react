import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function InvestmentPieChart({ investmentData }) {
  const getTypeTotals = (data) => {
    const typeMap = {};
    data.forEach(item => {
      const type = item.type || 'Other';
      typeMap[type] = (typeMap[type] || 0) + Number(item.amount);
    });
    return {
      labels: Object.keys(typeMap),
      values: Object.values(typeMap)
    };
  };

  const { labels, values } = getTypeTotals(investmentData || []);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          '#3f51b5', '#009688', '#ff5722', '#8bc34a', '#ffc107', '#e91e63'
        ],
        borderWidth: 1
      }
    ]
  };

  return <Pie data={chartData} />;
}

export default InvestmentPieChart;