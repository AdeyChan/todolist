import React, { useState, useEffect } from "react";
import styles from "./reminder.module.css";
import "./App.css";

const Reminder = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/reminders");
      const data = await response.json();
      setReminders(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.section}>
      <h2>Reminders</h2>
      {reminders.length === 0 ? (
        <p>No reminders for today.</p>
      ) : (
        <div>
          {reminders.map((reminder) => (
            <div key={reminder.id} className={styles.reminderSection}>
              <div className={styles.flexButtons}>
                <div className={styles.reminderSec}>
                  <p className={styles.reminderTitle}>{reminder.title}</p>
                  <p className={styles.reminderDesc}>{reminder.description}</p>
                </div>
                <div className={styles.dashButton}>
                  <div className={styles.editContainer}>
                    <i className={`bx bx-dots-vertical-rounded ${styles.dotsTooltip}`}></i>
                    <div className={styles.tooltip}>Edit</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reminder;