import React from 'react';
import { useNavigate } from 'react-router-dom';
import SummaryTable from '../components/SummaryTable';
import ChartGrid from '../components/ChartGrid';

function Dashboard({ incomeData, expensesData, savingsData, investmentData }) {
  const navigate = useNavigate();

  return (
    <div className='page'>
      <h2> Dashboard </h2>

      {/* Summary Section */}
      <SummaryTable
        incomeData={incomeData}
        expensesData={expensesData}
        savingsData={savingsData}
        investmentData={investmentData}
      />

      {/* Charts Section */}
      <ChartGrid
        incomeData={incomeData}
        expensesData={expensesData}
        savingsData={savingsData}
        investmentData={investmentData}
      />

      {/* Quick Actions */}
      <div className='dbd-btns'>
        <button onClick={() => navigate('/income')}> Add Income </button>
        <button onClick={() => navigate('/expenses')}> Add Expenses </button>
        <button onClick={() => navigate('/investments')}> Add Investment </button>
        <button onClick={() => navigate('/savings')}> Add Savings </button>
      </div>
    </div>
  );
}

export default Dashboard;