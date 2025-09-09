import React from 'react';

function SummaryTable({ incomeData = [], expensesData = [], savingsData = [], investmentData = [] }) {
  const getTotal = (data) => data.reduce((sum, item) => sum + Number(item.amount), 0);

  const totalIncome = getTotal(incomeData);
  const totalExpenses = getTotal(expensesData);
  const totalSavings = getTotal(savingsData);
  const totalInvestments = getTotal(investmentData);
  const netBalance = totalIncome - totalExpenses - totalInvestments + totalSavings;

  return (
    
    // Summary Section
    <table className="sum-table">
    <thead>
        <tr> 
            <th> Metric </th> 
            <th> Amount (₹) </th> 
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> Total Income </td>
            <td> {totalIncome} </td>
        </tr>
        <tr>
            <td> Total Expenses </td>
            <td> {totalExpenses} </td>
        </tr>
        <tr>
            <td> Total Savings </td>
            <td> {totalSavings} </td>
        </tr>
        <tr>
            <td> Total Investments </td>
            <td> {totalInvestments} </td>
        </tr>
        <tr>
            <td> <strong> Net Balance </strong> </td>
            <td> <strong> {netBalance} </strong> </td>
        </tr>
    </tbody>
    </table>
  );
}

export default SummaryTable;