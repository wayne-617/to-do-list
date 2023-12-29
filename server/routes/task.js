import express from 'express';
import {
    createTask,
    getTask,
    getTasks,
    deleteTask,
    updateTask
} from '../controllers/taskController.js'

const router = express.Router();

// GET full todo list
router.get('/', getTasks);

// GET single task
router.get('/:id', getTask);

// POST new task
router.post('/', createTask);

// DELETE a task
router.delete('/:id', deleteTask);

// UPDATE a task
router.patch('/:id', updateTask);

//export default router;
export default router;
//module.exports = router;