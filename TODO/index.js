import express from "express";
import bodyParser from "body-parser";
import Task from "./task.js";
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/todoDB");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/add", (req, res) => {
	const task = new Task({ list: req.body.list, task: req.body.task });
	console.log(task);
	task.save();
	res.redirect(`/${req.body.list}`);
});
app.delete("/delete/:id", async (req, res) => {
	const idToDelete = req.params.id;
	console.log(idToDelete);
	const id = new mongoose.Types.ObjectId(idToDelete);
	await Task.deleteOne({ _id: id });

	res.sendStatus(200);
});

app.get("/work", (req, res) => {
	Task.find({ list: "Work" }).then((t) => {
		res.render("index.ejs", { tasks: t, list: "Work" });
	});
});
app.get("/home", (req, res) => {
	res.redirect("/");
});

app.get("/", (req, res) => {
	Task.find({ list: "Home" }).then((t) => {
		res.render("index.ejs", { tasks: t, list: "Home" });
	});
});

app.listen(port);
