import React, { useState, useEffect } from "react";
import "./App.css";

const reminderSection = {
  marginBottom: "10px",
}

const reminderSec = {
  display: "flex",
  flexDirection: "column",
}

const flexButtons = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  width: "20vw",
  padding: "0"
}

const dashButton = {
  display: "flex",
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
        <div>
          {reminders.map((reminder) => (
            <div key={reminder.id} style={reminderSection}>
              <div style={flexButtons}>
                <div style={reminderSec}>
                  <p style={{ marginTop: "20px" }}>{reminder.title}</p>
                  <p style={{ marginBottom: "20px" }}>{reminder.description}</p>
                </div>
                <div style={dashButton}>
                  <i class='bx bx-dots-vertical-rounded' style={{fontSize: "30px"}}></i>
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
