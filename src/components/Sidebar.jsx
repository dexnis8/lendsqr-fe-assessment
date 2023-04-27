import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const activeStyle = ({ isActive }) => {
    return {
      background: isActive && "rgba(57, 205, 204, 0.06)",
      borderLeft: isActive ? "3px solid #39cdcc" : '3px solid #ffffff',
      opacity: isActive && 1,
    };
  };
  return (
    <div className="sidebar">
      <div className="organization">
        <img src="/images/briefcase 1.svg" alt="" />
        <select name="organization" id="aee">
          <option value="switch">Switch organization</option>
          <option value="lendsqr">Lendsqr</option>
        </select>
      </div>

      <section>
        <span className="dashboard">
          <img src="/images/home 1.svg" alt="" />
          <span>Dashboard</span>
        </span>
        <div className="customers">
          <span>Customers</span>
          <div className="list-items">
            <NavLink to="/dashboard" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/user-friends 1.svg" alt="user-icon" />
              </div>
              Users
            </NavLink>
            <NavLink to="/dashboard/guarantors" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/users 1.svg" alt="user-icon" />
              </div>
              Guarantor
            </NavLink>
            <NavLink to="/dashboard/all-loans" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/sack 1.svg" alt="user-icon" />
              </div>
              Loans
            </NavLink>
            <NavLink to="/dashboard/decision-models" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/handshake-regular 1.svg" alt="user-icon" />
              </div>
              Decision Models
            </NavLink>
            <NavLink to="/dashboard/savings" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/piggy-bank 1.svg" alt="user-icon" />
              </div>
              Savings
            </NavLink>
            <NavLink to="/dashboard/loan-request" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/Group 104.svg" alt="user-icon" />
              </div>
              Loan Requests
            </NavLink>
            <NavLink to="/dashboard/whitelist" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/user-check 1.svg" alt="user-icon" />
              </div>
              Whitelist
            </NavLink>
            <NavLink to="/dashboard/karma" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/user-times 1.svg" alt="user-icon" />
              </div>
              Karma
            </NavLink>
          </div>
        </div>
        <div className="customers">
          <span>Bussiness</span>
          <div className="list-items">
            <NavLink to="/dashboard/organization" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/briefcase 1.svg" alt="user-icon" />
              </div>
              Organization
            </NavLink>
            <NavLink to="/dashboard/loans-product" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/Group 104.svg" alt="user-icon" />
              </div>
              Loans Products
            </NavLink>
            <NavLink to="/dashboard/savings-products" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/bank.svg" alt="user-icon" />
              </div>
              Savings Products
            </NavLink>
            <NavLink to="/dashboard/charges" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/coins-solid 1.svg" alt="user-icon" />
              </div>
              Fees and Charges
            </NavLink>
            <NavLink to="/dashboard/transactions" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/icon.svg" alt="user-icon" />
              </div>
              Transactions
            </NavLink>
            <NavLink to="/dashboard/services" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/galaxy 1.svg" alt="user-icon" />
              </div>
              Services
            </NavLink>
            <NavLink to="/dashboard/service-account" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/user-cog 1.svg" alt="user-icon" />
              </div>
              Service Account
            </NavLink>
            <NavLink to="/dashboard/settlements" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/scroll 1.svg" alt="user-icon" />
              </div>
              Settlements
            </NavLink>
            <NavLink to="/dashboard/reports" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/chart-bar 2.svg" alt="user-icon" />
              </div>
              Reports
            </NavLink>
          </div>
        </div>
        <div className="customers">
          <span>Settings</span>
          <div className="list-items">
            <NavLink to="/dashboard/preference" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/chart-bar 2.svg" alt="user-icon" />
              </div>
              Preference
            </NavLink>
            <NavLink to="/dashboard/fees_pricing" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/chart-bar 2.svg" alt="user-icon" />
              </div>
              Fees and Pricing
            </NavLink>
            <NavLink to="/dashboard/audit-logs" style={activeStyle}>
              <div className="icon-container">
                <img src="/images/chart-bar 2.svg" alt="user-icon" />
              </div>
              Audit Logs
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
