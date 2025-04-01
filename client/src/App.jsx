import React, { useState, useEffect } from "react";
import Get from "./Get";
import Reminder from "./Reminder";
import generalStyles from "./general.module.css";
import mainStyles from "./maintasks.module.css";
import sideStyles from "./sidebar.module.css";
import "./App.css";
import "boxicons/css/boxicons.min.css";

function App() {
  return (
    <>
      <div className={generalStyles.topBar}>
          <div className={generalStyles.toDo}>
            <h2 className={generalStyles.toDo}>My Tasks</h2>
          </div>
      </div>
      <div className ={mainStyles.mainContent}>
        <div className={sideStyles.sideBar}>
          <ul className={sideStyles.sideMenu}>
            <li><a href="#"><i className="bx bxs-dashboard" style={{ paddingBottom: "10px"}}></i> Dashboard</a></li>
          </ul>
        </div>
        <div>
          <Get />
        </div>
        <div>
          <Reminder />
        </div>
      </div>
    </>
  );
}

export default App;