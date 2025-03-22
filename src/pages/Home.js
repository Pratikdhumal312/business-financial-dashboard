import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Home.css';  // Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  const navigateToDashboard = (role) => {
    // Redirecting to the role-specific dashboard page (You can adjust the routes accordingly)
    // history.push(`/dashboard/${role}`);
    navigate(`/${role}`);
  };

  return (
    <div className="home-container">
      <div className="welcome-message">
        <Typography variant="h3" className="welcome-text">Welcome to the Financial Dashboard</Typography>
        <Typography variant="h5" className="description-text">Select a role from the navigation to view specific dashboards.</Typography>
      </div>

      <div className="role-selection">
        <Button 
          variant="contained" 
          className="role-button" 
          onClick={() => navigateToDashboard('cfo')}
        >
          CFO Dashboard
        </Button>

        <Button 
          variant="contained" 
          className="role-button" 
          onClick={() => navigateToDashboard('unit-finance-controller')}
        >
          Unit Finance Controller Dashboard
        </Button>

        <Button 
          variant="contained" 
          className="role-button" 
          onClick={() => navigateToDashboard('head-of-accounts-payable')}
        >
          Head of Accounts Payable Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Home;
