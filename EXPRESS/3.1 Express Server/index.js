import express from "express";
import fs from "fs";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	fs.readFile("index.html", "utf-8", (err, data) => {
		if (err) throw err;
		res.send(data);
	});
});
app.get("/about", (req, res) => {
	res.send("<h2>About Me</h2><p>There is nothing Interesting about me</p>");
});
app.get("/contactme", (req, res) => {
	res.send("<h2>Contact Me</h2> <p>pakbulite123@gmail.com</p2>");
});
app.listen(port, () => {
	console.log(`Server running on port ${port}.`);
});
