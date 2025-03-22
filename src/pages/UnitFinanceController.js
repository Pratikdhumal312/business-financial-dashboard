import React, { useState, useEffect } from 'react';
import './UnitFinanceController.css'; // Import CSS for Unit Finance Controller

// Dummy data for financial metrics
const financialData = {
  revenue: 50000,
  expenses: 20000,
  profit: 30000,
  recentTransactions: [
    { id: 1, description: 'Office Supplies', amount: 200, date: '2025-03-20' },
    { id: 2, description: 'Software License', amount: 1500, date: '2025-03-18' },
    { id: 3, description: 'Staff Salaries', amount: 15000, date: '2025-03-15' },
  ],
};

const UnitFinanceController = () => {
  const [data, setData] = useState(financialData);

  useEffect(() => {
    // Normally, we would fetch the data from an API
    // For now, we're using static data
    setData(financialData);
  }, []);

  return (
    <div className="unit-finance-controller">
      <h1>Unit Finance Controller Dashboard</h1>
      <p className="intro-text">Manage your unit's financials, view reports, and track recent transactions.</p>

      <div className="overview-cards">
        <div className="card">
          <h3>Total Revenue</h3>
          <p>${data.revenue}</p>
        </div>
        <div className="card">
          <h3>Expenses</h3>
          <p>${data.expenses}</p>
        </div>
        <div className="card">
          <h3>Profit</h3>
          <p>${data.profit}</p>
        </div>
      </div>

      <div className="recent-transactions">
        <h2>Recent Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.recentTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>${transaction.amount}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="quick-actions">
        <button className="action-btn">Generate Financial Report</button>
        <button className="action-btn">View Detailed Breakdown</button>
      </div>
    </div>
  );
};

export default UnitFinanceController;
