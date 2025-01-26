const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Create a new To-Do
router.post('/', async (req, res) => {
    const { title, completed } = req.body;
    try {
        const newTodo = await Todo.create({ title, completed });
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all To-Dos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a To-Do
router.patch('/:id', async (req, res) => {
    const { title, completed } = req.body;
    try {
        const todo = await Todo.findByPk(req.params.id);
        if (title) todo.title = title;
        if (completed !== undefined) todo.completed = completed;
        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a To-Do
router.delete('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByPk(req.params.id);
        await todo.destroy();
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
