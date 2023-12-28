import express from 'express';
import { Task } from '../models/taskModel.js';

const router = express.Router();

// GET full todo list
router.get('/', (req, res) => {
    res.json({mssg: 'GET all tasks'})
})

// GET single task
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single task'})
})

// POST new task
router.post('/', async (req, res) => {
    const {title, day} = req.body;

    try {
        const task = await Task.create({title, day});
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'POST new task'})
})

// DELETE a task
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a task'})
})

// UPDATE a task
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a task'})
})

//export default router;
export default router;
//module.exports = router;