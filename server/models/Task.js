import mongoose from "mongoose";

const Schema = mongoose.Schema;
const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    day: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.mondel('Task', taskSchema);