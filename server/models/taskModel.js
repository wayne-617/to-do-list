import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    day: {
        type: String,
    }
}, { timestamps: true });



export const Task = mongoose.model('Task', taskSchema);