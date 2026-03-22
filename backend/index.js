const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Replace later with real MongoDB URL
mongoose.connect("mongodb+srv://manju95siddu_db_user:<054kdrb0gq3UqEI8>@cluster0.l1tdpiz.mongodb.net/");

// Schema
const Task = mongoose.model("Task", {
  name: String,
  completed: Boolean
});

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/add", async (req, res) => {
  const task = new Task({
    name: req.body.name,
    completed: false
  });
  await task.save();
  res.send(task);
});

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});