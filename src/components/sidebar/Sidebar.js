import React, { useState } from "react";
import "./sidebar.css";

import { sidebarData } from "../../data/Data";
const Sidebar = () => {
  const [selected, setSelected] = useState();
  return (
    <div className="sidebar">
      <div className="logo">
        <span>
          O<span>K</span>R
        </span>
      </div>
      <div className="menu">
        {sidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
