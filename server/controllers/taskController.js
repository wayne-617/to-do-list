import { Task } from '../models/taskModel.js';
import mongoose from 'mongoose';

// get all tasks
export const getTasks = async (req, res) => {
    const tasks = await Task.find({}).sort({createdAt: -1});

    res.status(200).json(tasks)
}
// get a single task
export const getTask = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Task not found'});
    }

    const task = await Task.findById(id);

    if (!task) {
        return res.status(400).json({error: 'Task not found'});
    }

    res.status(200).json(task);
}

// create a new task
export const createTask = async (req, res) => {
    const {title, day} = req.body;

    try {
        const task = await Task.create({title, day});
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    // res.json({mssg: 'POST new task'})
};

// delete a task
export const deleteTask = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Task not found'});
    }

    const task = await Task.findOneAndDelete({_id: id});

    if (!task) {
        return res.status(400).json({error: 'Task not found'});
    }

    res.status(200).json(task);
}

// update a task
export const updateTask = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Task not found'});
    }

    const task = await Task.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if (!task) {
        return res.status(400).json({error: 'Task not found'});
    }

    res.status(200).json(task);
}