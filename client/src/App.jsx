import React, { useState, useEffect } from "react";
import Get from "./Get";
import Reminder from "./Reminder";
import "./App.css";
import "boxicons/css/boxicons.min.css";

function App() {
  
  const topBar = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  }

  const toDo = {
    flex: "1",
    textAlign: "center",
  }

  const sideBar = {
    width: "12vw",
    height: "80vh",
    borderRadius: "10px",
    marginRight: "20px",
    marginTop: "10px",
    marginLeft: "10px",
    display: "inline-block",
    backgroundColor: "rgba(255,255,255, 0.1)",
  }

  const clientTasks = {
    width: "63vw",
    marginTop: "10px",
    verticalAlign: "top",
    listStyle: "none",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    top: "143.5px",
    borderRadius: "10px",
  }

  const sideMenu = {
    listStyle: "none",
    padding: "0",
    textAlign: "center"
  }

  const clientRemind = {
    marginLeft: "20px",
    display: "flex",
    alignItems: "end",
  }

  const mainContent = {
    display: "flex",
    flexDirection: "row",
  }
  return (
    <>
      <div style={topBar}>
          <div style={toDo}>
            <h2 style={toDo}>My Tasks</h2>
          </div>
      </div>
      <div style ={mainContent}>
        <div style={sideBar}>
          <ul style={sideMenu}>
            <li><a href="#"><i className="bx bxs-dashboard" style={{ paddingBottom: "10px"}}></i>Dashboard</a></li>
            <li><a href="#"><i className="bx bx-plus-circle" style={{ paddingBottom: "10px"}}></i>Add Task</a></li>
          </ul>
        </div>
        <div style={clientTasks}>
          <Get />
        </div>
        <div style={clientRemind}>
          <Reminder />
        </div>
      </div>
    </>
  );
}

export default App;