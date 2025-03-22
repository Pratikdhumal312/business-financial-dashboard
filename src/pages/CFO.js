import React from 'react';
import FinancialMetrics from '../components/FinancialMetrics';
import Reports from '../components/Reports';
import Alerts from '../components/Alerts';
import './CFO.css'; // Importing the CSS for styling

const CFO = () => {
  return (
    <div className="cfo-dashboard">
      <h1>CFO Dashboard</h1>
      
      <div className="cfo-content">
        <div className="cfo-row">
          <FinancialMetrics />
          <Reports />
        </div>
        
        <div className="cfo-alerts">
          <Alerts />
        </div>
      </div>
    </div>
  );
};

export default CFO;
