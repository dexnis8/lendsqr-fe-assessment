import React, { useState, useEffect, useRef } from "react";
import DataTable from "react-data-table-component";
import Card from "./Card";
import axios from "axios";
import Modal from "./Modal";
import { cardData } from "./cardData";
import Moment from "react-moment";

// const handleSelection =(el)=>{
//   el=='1984' ? el='this is your year' : el
// }

const Users = () => {
  const [active, setActive] = useState({
    backgroundColor: "red",
    color: "white",
    padding: "8px",
    borderRadius: "25px",
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "5px",
    width: "100px",
    // fontSize:'18px'
  });
  const cellStyles = {
    fontWeight: "400",
    fontSize: "14px",
    color: "#545F7D",
    lineHeight: "16px",
  };
  const headstyles = {
    headCells: {
      style: {
        textTransform: "upperCase",
        fontWeight: "600",
        fontSize: "12px",
        color: "#545F7D",
        lineHeight: "14px",
      },
    },
  };
  let rowId;
  const [tableData, setTableData] = useState([]);
  const [showActionModal, setShowActionModal] = useState(true);
  const [mousePos, setMousePos] = useState({});
  const [absolutePos, setAbsolutePos] = useState(false);
  const [loading, setLoading] = useState(false);

  // Functions

  // const handleShowActionModalDisplay = () => {
  //   setShowActionModal(true);
  // };

  const handleHideActionModal = () => {
    setShowActionModal(false);
    setAbsolutePos(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleHideActionModal);

    return () => {
      window.removeEventListener("scroll", handleHideActionModal);
    };
  }, []);

  const handleMouseMove = (event) => {
    setShowActionModal(true);
    setAbsolutePos(true);
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  // Table Columns

  const columns = [
    {
      name: "ORGANIZATION",
      selector: (row) => row.orgName,
      sortable: true,
      style: cellStyles,
    },
    {
      name: "USERNAME",
      selector: (row) => row.userName,
      sortable: true,
      grow: 1,
      style: cellStyles,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      sortable: true,
      grow: 1,
      style: cellStyles,
    },
    {
      name: "PHONE NUMBER",
      selector: (row) => row.phoneNumber,
      sortable: true,
      style: cellStyles,
      grow: 1,
    },
    {
      name: "DATE JOINED",
      selector: (row) => row.createdAt,
      sortable: true,
      grow: 1.3,
      style: cellStyles,
      cell: (row) => (
        <Moment format="MMM D, YYYY h:mm a">{row?.createdAt}</Moment>
      ),
    },
    {
      name: "Id",
      sortable: true,
      style: cellStyles,
      omit: true,
    },
    {
      name: "STATUS",
      sortable: true,
      style: cellStyles,
      button: true,
      // selector:row => row.status,
      cell: () => <button className="table-btn">Active</button>,
    },

    {
      name: "",
      cell: (row, index, column, id) => {
        // console.log(index);
       
        return (
          <div onClick={() => sessionStorage.setItem("id", id)}>
            <div className="table-dots" onClick={handleMouseMove}>
              <img src="/images/dots.svg" alt="actionIcon" />
            </div>
          </div>
        );
      },
      grow: 0.1,
    },
  ];

  const status = ["Active", "Inactive", "Blacklisted"];
  // Fetching table data
  useEffect(() => {
    setShowActionModal(false);
    setLoading(true);
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((resp) => {
        // console.log(resp.data);
        setLoading(false);
        setTableData(resp.data);
        tableData.push(status);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(true);
      });
  }, []);

  return (
    <div className="user-dashboard">
      {showActionModal && (
        <div className="backdrop" onClick={handleHideActionModal}></div>
      )}
      <h3 className="header">Users</h3>
      <div className="cards">
        {cardData.map((card) => (
          <Card
            key={card.id}
            style={card.style}
            avatar={card.avatar}
            text={card.text}
            amount={card.amount}
          />
        ))}
      </div>
      <div className="table-container">
        {loading ? (
          <div className="loading">
            <span>Loading...</span>
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={tableData}
            responsive
            pagination
            noDataComponent={"No data to display"}
            customStyles={headstyles}
            sortIcon={
              <img
                src="/images/sorticon.svg"
                className="sortIcon"
                alt="sortIcon"
              />
            }
          />
        )}
      </div>

      {showActionModal ? <Modal left={mousePos.x} top={mousePos.y} /> : null}
    </div>
  );
};

export default Users;
