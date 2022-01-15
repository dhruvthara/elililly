import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
//Components
import Header from './Components/Header';
import CustomerData from './Components/CustomerData';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/customerdata" element={<CustomerData />} />
          <Route path="/login" element={<CustomerData />} />
          <Route path="/" element={<CustomerData />} />
        </Routes>
      </div>
    </Router>
  );
}