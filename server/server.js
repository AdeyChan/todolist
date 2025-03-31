const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

const tasks = [
  { id: 1, title: "Work", description: "Work to do" },
  { id: 2, title: "Job", description: "My job to do" },
  { id: 3, title: "Car", description: "The car I have to clean" },
];

// A GET request that shows all my tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// A POST request that adds a new task
app.post("/tasks", (req, res) => {
  const newId = tasks.length + 1;
  const newTask = {
    id: newId,
    title: req.body.title,
    description: req.body.description,
  };
  tasks.push(newTask);
  res.json(newTask);
});

// A PUT request that updates a task
app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);
  if (tasks) {
    task.title = req.body.title;
    task.description = req.body.description;
  } else {
    res.status(404).json({ message: "Task not found" });
  }
  res.json(tasks);
});

// A DELETE request that deletes a task
app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  } else {
    tasks.splice(taskIndex, 1);

    // Updates the id after deletion
    tasks.forEach((task, index) => {
      task.id = index + 1;
    });

    return res.status(200).json({ message: "Task deleted successfully" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
