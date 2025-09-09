import React from 'react';
import MonthlyTrendChart from './MonthlyTrendChart';
import ExpensePieChart from './ExpensePieChart';
import SavingsPieChart from './SavingsPieChart';
import InvestmentsPieChart from './InvestmentsPieChart';

function ChartGrid({ incomeData, expensesData, savingsData, investmentData }) {
  return (
    <div className="chart-grid">
      <div className="chart"><MonthlyTrendChart incomeData={incomeData} expensesData={expensesData} /></div>
      <div className="chart"><ExpensePieChart expensesData={expensesData} /></div>
      <div className="chart"><SavingsPieChart savingsData={savingsData} /></div>
      <div className="chart"><InvestmentsPieChart investmentData={investmentData} /></div>
    </div>
  );
}

export default ChartGrid;
