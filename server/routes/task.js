import express from 'express';
import {
    createTask,
    getTask,
    getTasks,
} from '../controllers/taskController.js'

const router = express.Router();

// GET full todo list
router.get('/', getTasks);

// GET single task
router.get('/:id', getTask);

// POST new task
router.post('/', createTask)

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