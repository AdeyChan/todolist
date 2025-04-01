import React, { useState, useEffect } from "react";
import styles from "./maintasks.module.css";
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
    <div className={styles.mainTaskDiv}>
      <h2 className={styles.taskSection}>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <div>
          {tasks.map((task) => (
              <div key={task.id} className={styles.taskDiv}>
                <div>
                  <p>{task.title}</p>
                  <p>{task.description}</p>
                </div>
              </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Get;
