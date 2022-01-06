const { Router } = require("express");
const req = require("express/lib/request");
const Todo = require("../models/Todo");
const router = Router();

router.post("/addTodo", async (req, res) => {
  try {
    const { text, userId } = req.body;

    const todo = await new Todo({
      text,
      owner: userId,
      completed: false,
      important: false,
    });

    await todo.save();

    res.status(201).json({ message: "Todo was created!" });
  } catch (error) {
    console.error(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const { userId } = req.query;

    const todo = await Todo.find({ owner: userId });

    res.json(todo);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/deleteTodo/:id", async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id });

    res.json(todo);
  } catch (error) {
    console.error(error);
  }
});

router.put("/completedTodo/:id", async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });

    todo.completed = !todo.completed;

    await todo.save();

    res.json(todo);
  } catch (error) {
    console.error(error);
  }
});

router.put("/importantTodo/:id", async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });

    todo.important = !todo.important;

    await todo.save();

    res.json(todo);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
