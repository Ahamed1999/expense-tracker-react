import React from 'react';
import SummaryTable from '../components/SummaryTable';
import ChartGrid from '../components/ChartGrid';

function Reports({ incomeData, expensesData, savingsData, investmentData }) {
  return (
    <div className="page">
      <h2> Reports </h2>

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

      {/* Export Section */}
      <div className="rep-export">
        <button className="rep-btn"> Download Report </button>
      </div>
    </div>
  );
}

export default Reports;