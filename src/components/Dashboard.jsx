import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="contents">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
