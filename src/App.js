import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import GeneralDetails from "./components/GeneralDetails";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import Sidebar from "./components/Sidebar";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Users />} />
            <Route path="user-details/:userId">
              <Route index element={<UserDetails />} />
              {/* <Route path="general-details" element={<GeneralDetails />} /> */}
            </Route>
          </Route>
          <Route path="/user-details" element={<UserDetails />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
