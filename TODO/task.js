import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
	list: String,
	task: String,
});

const Task = new mongoose.model("Task", taskSchema);

export default Task;
