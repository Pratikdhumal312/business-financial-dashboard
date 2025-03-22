import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CFO from './pages/CFO';
import UnitFinanceController from './pages/UnitFinanceController';
import AccountsPayable from './pages/AccountsPayable';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cfo" element={<CFO />} />
        <Route path="/unit-finance-controller" element={<UnitFinanceController />} />
        <Route path="/accounts-payable" element={<AccountsPayable />} />
      </Routes>
    </Router>
  );
};

export default App;