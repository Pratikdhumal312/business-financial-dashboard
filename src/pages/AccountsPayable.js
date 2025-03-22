import React, { useState } from 'react';
import './AccountsPayable.css'; // Import CSS for Accounts Payable

// Dummy data for outstanding bills and payment history
const billsData = [
  { id: 1, description: 'Office Rent', amount: 5000, dueDate: '2025-03-30', status: 'Due' },
  { id: 2, description: 'Software Subscription', amount: 1200, dueDate: '2025-03-25', status: 'Due' },
  { id: 3, description: 'Supplier Payment', amount: 3000, dueDate: '2025-03-28', status: 'Paid' },
];

const paymentHistoryData = [
  { date: '2025-03-15', amount: 1000 },
  { date: '2025-03-10', amount: 1500 },
  { date: '2025-03-05', amount: 2000 },
];

const AccountsPayable = () => {
  const [bills, setBills] = useState(billsData);
  const [paymentHistory, setPaymentHistory] = useState(paymentHistoryData);

  const handleMarkAsPaid = (id) => {
    setBills(
      bills.map((bill) =>
        bill.id === id ? { ...bill, status: 'Paid' } : bill
      )
    );
  };

  const handleAddBill = () => {
    const newBill = {
      id: bills.length + 1,
      description: 'New Bill',
      amount: 1000,
      dueDate: '2025-04-10',
      status: 'Due',
    };
    setBills([...bills, newBill]);
  };

  return (
    <div className="accounts-payable">
      <h1>Accounts Payable Dashboard</h1>
      <p className="intro-text">
        Manage your accounts payable processes, track outstanding bills, and make payments.
      </p>

      {/* Outstanding Bills Section */}
      <div className="outstanding-bills">
        <h2>Outstanding Bills</h2>
        <div className="bills-table">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <tr key={bill.id}>
                  <td>{bill.description}</td>
                  <td>${bill.amount}</td>
                  <td>{bill.dueDate}</td>
                  <td>{bill.status}</td>
                  <td>
                    {bill.status === 'Due' && (
                      <button
                        className="mark-paid-btn"
                        onClick={() => handleMarkAsPaid(bill.id)}
                      >
                        Mark as Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="add-bill-btn" onClick={handleAddBill}>
          Add New Bill
        </button>
      </div>

      {/* Payment History Section */}
      <div className="payment-history">
        <h2>Payment History</h2>
        <div className="history-chart">
          <h3>Recent Payments</h3>
          {/* You can replace this with a charting library like Recharts */}
          <ul>
            {paymentHistory.map((payment, index) => (
              <li key={index}>
                <strong>{payment.date}</strong>: ${payment.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountsPayable;
