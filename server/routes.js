import express from "express";
import { todoModel } from "./database.js";

const router = express.Router();

// GET /todos - devuelve todos los todos
router.get("/todos", async (req, res) => {
    const todos = await todoModel.find();
    res.status(200).json(todos);
});

// POST /todos - crea un nuevo todo
router.post("/todos", async (req, res) => {
    try {
        const todo = new todoModel(req.body);
        const result = await todo.save();
        res.status(201).json(result);
        console.log("Nuevo Todo Creado ok: ", req.body);
    } catch (error) {
        res.status(400).json({ error: "Error creating the todo", message: error.message });
    }
});

// PUT /todos/completed/:id - actualiza un todo como completado
router.put("/todos/completed/:id", async (req, res) => {
    try {
        console.log('editing todo');
        const { id } = req.params;
        const todo = await todoModel.findById(id);
        todo.completed = !todo.completed;
        const result = await todo.save();
        res.status(200).json(result);
        console.log(`Se adtualiza el todo con id: ${req.params.id}, nuevo estado: ${todo.completed}`);
    } catch (error) {
        res.status(400).json({ error: "Error updating the todo", message: error.message });
    }
});

// PUT /todos/edit/:id - actualiza un todo
router.put("/todos/edit/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await todoModel.findById(id);
        const newTitle = new todoModel(req.body).title;
        todo.title = newTitle;
        const result = await todo.save();
        res.status(200).json(result);
        console.log(`Se adtualiza el todo con id: ${req.params.id}, nuevo texto: ${newTitle}`);
    } catch (error) {
        res.status(400).json({ error: "Error updating the todo", message: error.message });
    }
});

// DELETE /todos/:id - elimina un todo
router.delete("/todos/:id", async (req, res) => {
    try
    {
        const { id } = req.params;
        await todoModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Todo deleted successfully"});
        console.log("DELETE TODO ID: ", req.params.id);
    } catch (error) {
        res.status(400).json({ error: "Error deleting the Todo"});
    }
});

export default router;