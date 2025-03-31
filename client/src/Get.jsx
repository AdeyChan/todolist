import React, { useState, useEffect } from "react";
import "./App.css";

const Get = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setTasks(data);
    };

    fetchData();
  }, []);

  return (
    <div style={{ paddingLeft: "20px"}}>
      <h2 style={{ marginTop: "0", padding: "10px"}}>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
               {task.title} : {task.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Get;
