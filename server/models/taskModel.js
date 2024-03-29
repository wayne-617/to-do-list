import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    day: {
        type: String,
    }
}, { timestamps: true });



export const Task = mongoose.model('Task', taskSchema);