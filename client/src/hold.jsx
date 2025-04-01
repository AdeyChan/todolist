import React from 'react';

const Hold = () => {
    const clientTasks = {
        width: "63vw",
        marginTop: "10px",
        verticalAlign: "top",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        top: "143.5px",
        borderRadius: "10px",
      }
};

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

  const sideMenu = {
    display: "flex",
    flexDirection: "column",
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

export default Hold;