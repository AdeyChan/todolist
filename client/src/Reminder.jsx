import React, { useState, useEffect } from "react";
import "./App.css";

const reminderSection = {
  backgroundColor: "rgba(255, 255, 255, 0.1",
}

const reminderSec = {
  display: "flex",
  flexDirection: "column"
}

const flexButtons = {
  display: "flex",
  flexDirection: "row",
}

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
    <div>
      <h2>Reminders</h2>
      {reminders.length === 0 ? (
        <p>No reminders for today.</p>
      ) : (
        <div style={reminderSection}>
          {reminders.map((reminder) => (
            <div key={reminder.id} style={reminderSection}>
              <div style={flexButtons}>
                <div style={reminderSec}>
                  <p>{reminder.title}</p>
                  <p>{reminder.description}</p>
                </div>
                <div>
                  <i class='bx bx-dots-vertical-rounded'></i>
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
