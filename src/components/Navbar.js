import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cfo">CFO Dashboard</Link></li>
        <li><Link to="/unit-finance-controller">Unit Finance Controller</Link></li>
        <li><Link to="/accounts-payable">Accounts Payable</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;