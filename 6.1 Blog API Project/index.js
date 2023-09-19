import express from "express";
import bodyParser from "body-parser";
import Post from "./post.js";
import mongoose from "mongoose";
const app = express();
const port = 4000;

// In-memory data store

mongoose.connect("mongodb://127.0.0.1:27017/blogDB");
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//

//CHALLENGE 1: GET All posts
app.get("/posts", (req, res) => {
	Post.find().then((posts) => {
		res.json(posts);
	});
});
//CHALLENGE 2: GET a specific post by id
app.get("/posts/:id", (req, res) => {
	const id = req.params.id;
	const idDatabase = new mongoose.Types.ObjectId(id);
	Post.find({ _id: idDatabase }).then((p) => {
		console.log(p);
		res.json(p[0]);
	});
});
//CHALLENGE 3: POST a new post
app.post("/posts", (req, res) => {
	const title = req.body.title;
	const content = req.body.title;
	const author = req.body.author;
	const post = new Post({
		title: title,
		content: content,
		author: author,
	});
	post.save().then((p) => {
		console.log(p);
	});
	res.json(post);
});
//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => {
	const id = req.params.id;
	const idDatabase = new mongoose.Types.ObjectId(id);
	const data = req.body;
	console.log(data);
	console.log(idDatabase);
	Post.find({ _id: idDatabase }).then(async (p) => {
		await Post.updateOne(
			{ _id: idDatabase },
			{
				title: data.title || p.title,
				content: data.content || p.content,
				author: data.author || p.author,
			}
		);
	});

	res.sendStatus(200);
});
//CHALLENGE 5: DELETE a specific post by providing the post id.
app.delete("/posts/:id", async (req, res) => {
	const id = req.params.id;
	const idDatabase = new mongoose.Types.ObjectId(id);
	await Post.deleteOne({ _id: idDatabase });
	res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`API is running at http://localhost:${port}`);
});
