import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import GeneralDetails from "./GeneralDetails";
import axios from "axios";
import Documents from "./sub-comp/Documents";
import BankDetails from "./sub-comp/BankDetails";
import AppandSystem from "./sub-comp/AppandSystem";
import Loans from "./sub-comp/Loans";
import Savings from "./sub-comp/Savings";

const UserDetails = () => {
  const { userId } = useParams();
  const [data, setData] = useState();
  const Navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(0);

  const rowId = sessionStorage.getItem("id").substring(7);
  useEffect(() => {
    Navigate("/dashboard/user-details/general-details");
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${rowId}`
      )
      .then((resp) => {
        // console.log(resp.data);
        // console.log(resp.data.profile);
        setData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [rowId]);

  const navStyles = ({ isActive }) => {
    return {
      borderBottom: isActive && "2px solid #39CDCC",
      color: isActive && "#39CDCC",
    };
  };

  return (
    <div className="user-details">
      <button className="back-btn">
        <a href="/dashboard">
          <img src="/images/arr.svg" alt="arr" />
          <p>Back to Users</p>
        </a>
      </button>
      <div className="flex">
        <h4>User Details</h4>

        <div className="btn">
          <button className="btn1">Blacklist User</button>
          <button className="btn2">Activate User</button>
        </div>
      </div>
      <div className="container">
        <div className="sub-container">
          <div className="name-pic_container">
            <div className="user-pic">
              <img src={data?.profile?.avatar} alt="profile pic" />
            </div>
            <div className="user-name">
              <span>
                {`${data?.profile.firstName} ${data?.profile.lastName}`}
              </span>
              <p>{`${data?.accountNumber}`}</p>
            </div>
          </div>
          <div className="user-tier">
            <p>User's Tier</p>
            <div className="stars">
              <img src="/images/star-filled.svg" alt="rating" />
              <img src="/images/star.svg" alt="rating" />
              <img src="/images/star.svg" alt="rating" />
            </div>
          </div>
          <div className="acct-bal">
            <span>₦ {`${data?.accountBalance}`}</span>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>

        <div className="nav-list">
          <NavLink
            to="/dashboard/user-details/general-details"
            style={navStyles}
            onClick={() => setShowDetails(0)}
          >
            General Details
          </NavLink>
          <NavLink
            to="/dashboard/user-details/documents"
            onClick={() => setShowDetails(1)}
            style={navStyles}
          >
            Documents
          </NavLink>
          <NavLink
            to="/dashboard/user-details/bank-details"
            onClick={() => setShowDetails(2)}
            style={navStyles}
          >
            Bank Details
          </NavLink>
          <NavLink
            to="/dashboard/user-details/Loans"
            onClick={() => setShowDetails(3)}
            style={navStyles}
          >
            Loans
          </NavLink>
          <NavLink
            to="/dashboard/user-details/Savings"
            onClick={() => setShowDetails(4)}
            style={navStyles}
          >
            Savings
          </NavLink>
          <NavLink
            to="/dashboard/user-details/app-system"
            onClick={() => setShowDetails(5)}
            style={navStyles}
          >
            App and System
          </NavLink>
        </div>
      </div>

      {showDetails === 0 && <GeneralDetails data={data} />}
      {showDetails === 1 && <Documents />}
      {showDetails === 2 && <BankDetails />}
      {showDetails === 3 && <Loans />}
      {showDetails === 4 && <Savings />}
      {showDetails === 5 && <AppandSystem />}
    </div>
  );
};

export default UserDetails;
