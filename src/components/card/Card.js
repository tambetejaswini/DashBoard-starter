import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

import "./card.css";
function Card(props) {
  console.log(props);
  return (
    <div
      className="compact-card"
      style={{
        background: props.color.backGround,
        boxShadow: props.color.boxShadow,
      }}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={props.barValue}
          text={`${props.barValue}%`}
        ></CircularProgressbar>
      </div>
      <div className="detail">
        <div className="iconInfo">
          <span>
            <AddBusinessIcon />
          </span>
          <span>{props.title}</span>
        </div>
        <div>{props.person}</div>
      </div>
    </div>
  );
}

export default Card;
