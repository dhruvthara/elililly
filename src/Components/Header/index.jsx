import React from 'react';import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Header = props => {
  return <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/customerdata">Customer Data</Link>
          </li>
        </ul>
      </nav>
};

export default Header;