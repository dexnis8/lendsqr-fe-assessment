import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img" style={props.style}>
          <img src={`/images/${props.avatar}`} alt="" />
        </div>
        <div>
          <span className="card-title">{props.text}</span>
        </div>
        <div>
          <h2>{props.amount}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
