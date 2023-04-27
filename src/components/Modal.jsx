import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Modal = ({ top, left, posAbsolute }) => {
  // const storageChange = sessionStorage.getItem("id");
  // let idStr;
  // let truncId;
  // useEffect(() => {
  //   idStr = sessionStorage.getItem("id");
  //   truncId = idStr.substring(7);
  // }, [storageChange]);
  
  console.log();
  const Navigate = useNavigate();
  const handleNavigation = () => {
    // sessionStorage.setItem("truncId", truncId);
     Navigate("user-details/general-details");
  };

  return (
    <ModalContainer topPos={top} leftPos={left} pos={posAbsolute}>
      <div className="d-flex" onClick={handleNavigation}>
        <img src="/images/viewUser.svg" alt="eye-icon" />
        <span>View Details</span>
      </div>
      <div className="d-flex">
        <img src="/images/removeUser.svg" alt="eye-icon" />
        <span>Blacklist User</span>
      </div>
      <div className="d-flex">
        <img src="/images/activateUser.svg" alt="eye-icon" />
        <span>Activate User</span>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  background: #ffffff;
  // background: red;
  border: 1px solid rgba(84, 95, 125, 0.04);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  position: ${(props) => (props.pos ? "absolute" : "fixed")};
  z-index: 20;
  top: ${(props) => props.topPos}px;
  left: ${(props) => props.leftPos - 210}px;
  // top:15px;
  // right:85px;
  width: 200px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`;

export default Modal;
