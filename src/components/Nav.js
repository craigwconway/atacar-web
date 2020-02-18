import React from "react";

import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Current Inventory
      </Link>
      <Link to="/sold" className="nav-link">
        Sold
      </Link>
      <Link to="/services" className="nav-link">
        Additional Services
      </Link>
      <Link to="/repair" className="nav-link">
        Repair Services
      </Link>
      <Link to="/loan-calculator" className="nav-link">
        Loan Calculator
      </Link>
      <Link to="/about" className="nav-link">
        About Us
      </Link>
      <Link to="/contact" className="nav-link">
        Contact Us
      </Link>
      <AuthLinks auth={props.auth} />
    </nav>
  );
}

function AuthLinks(props) {
  if (props.auth) {
    return (
      <>
        <Link to="/add-inventory" className="nav-link nav-link-auth">
          Add Inventory
        </Link>
        <Link to="/logout" className="nav-link nav-link-auth">
          Logout
        </Link>
      </>
    );
  }
  return null;
}
