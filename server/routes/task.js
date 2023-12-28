import express from 'express';

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
router.post('/', (req, res) => {
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

export default router;