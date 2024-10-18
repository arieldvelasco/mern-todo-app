import express from "express";
import { todoModel } from "./database.js";

const router = express.Router();

// GET /todos
router.get("/todos", async (req, res) => {
    const todos = await todoModel.find();
    res.status(200).json(todos);
});

// POST /todos
router.post("/todos", async (req, res) => {
    try {
        const todo = new todoModel(req.body);
        const result = await todo.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: "Error creating the todo", message: error.message });
    }
});



// PUT /todos/:id
router.put("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const record = await todoModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
    router.status(200).json(record);
});

// DELETE /todos/:id
router.delete("/todos/:id", async (req, res) => {
    const { id } = req.params;
    await todoModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted successfully"});
});

export default router;