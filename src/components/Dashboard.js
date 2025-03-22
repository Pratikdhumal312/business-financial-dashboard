// import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import './Dashboard.css';  // Import the CSS styles

// Dashboard component for displaying financial data
const Dashboard = () => {
  const [financialData, setFinancialData] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch financial data from the backend
  const fetchFinancialData = () => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_API_URL)  // Using API URL from .env file
      .then((response) => {
        setFinancialData(response.data);
        setChartData([
          { month: 'January', revenue: 50000 },
          { month: 'February', revenue: 60000 },
          { month: 'March', revenue: 55000 },
        ]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching financial data:', error);
        setLoading(false);
      });
  };

  // Polling every 30 seconds
  useEffect(() => {
    fetchFinancialData();
    const intervalId = setInterval(fetchFinancialData, 30000);  // Fetch every 30 seconds
    return () => clearInterval(intervalId);  // Cleanup the interval on unmount
  }, []);

  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  if (!financialData) {
    return <div className="no-data-message">No data available</div>;
  }

  return (
    <div className="dashboard-container">
      {/* Dashboard Cards */}
      <div className="cards-container">
        <Card className="dashboard-card">
          <CardContent>
            <Typography variant="h5">Revenue</Typography>
            <Typography variant="h6">${financialData.revenue}</Typography>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardContent>
            <Typography variant="h5">Expenses</Typography>
            <Typography variant="h6">${financialData.expenses}</Typography>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardContent>
            <Typography variant="h5">Profit</Typography>
            <Typography variant="h6">${financialData.profit}</Typography>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardContent>
            <Typography variant="h5">Cash Flow</Typography>
            <Typography variant="h6">${financialData.cashFlow}</Typography>
          </CardContent>
        </Card>
      </div>

      {/* Chart Section */}
      <div className="chart-container">
        <LineChart width={800} height={400} data={chartData}>
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
        </LineChart>
      </div>

      {/* Button to manually refresh data */}
      <div className="refresh-button">
        <Button onClick={fetchFinancialData} variant="contained">Refresh Now</Button>
      </div>
    </div>
  );
};

export default Dashboard;
