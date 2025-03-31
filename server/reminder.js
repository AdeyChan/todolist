const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

const reminders = [
  { id: 1, title: "Go for a walk", description: "8:00 AM - 9:00 AM" },
  { id: 2, title: "Coding", description: "12:00 PM - 3:00 PM" },
];

app.get("/reminders", (req, res) => {
    res.json(reminders);
  });

app.post("/reminders", (req, res) => {
  const newId = reminders.length + 1;
  const newReminder = {
    id: newId,
    title: req.body.title,
    description: req.body.description,
  };
  reminders.push(newReminder);
  res.json(newReminder);
});

app.put("/reminders/:id", (req, res) => {
  const reminderId = parseInt(req.params.id);
  const reminder = reminders.find((reminder) => reminder.id === reminderId);
  if (reminders) {
    reminder.title = req.body.title;
    reminder.description = req.body.description;
  } else {
    res.status(404).json({ message: "Reminder not found" });
  }
  res.json(reminders);
});

app.delete("/reminders/:id", (req, res) => {
  const reminderId = parseInt(req.params.id);
  const reminderIndex = reminders.findIndex(
    (reminder) => reminder.id === reminderId
  );
  if (reminderIndex === -1) {
    return res.status(404).json({ message: "Reminder not found" });
  } else {
    reminders.splice(reminderIndex, 1);

    reminders.forEach((reminder, index) => {
      reminder.id = index + 1;
    });

    return res.status(200).json({ message: "Reminder deleted successfully" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
