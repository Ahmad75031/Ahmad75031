import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

var home = {};
var work = {};
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/task", (req, res) => {
	console.log(req.body);
});

app.get("/", (req, res) => {
	res.render("index.ejs", {
		task: "Make a todo list app",
		name: "Home",
		day: "Mon",
		Heading: "Make website",
	});
});
app.get("/work", (req, res) => {
	res.render("index.ejs", { data: work, name: "Work" });
});
app.get("/add", (req, res) => {
	res.render("add.ejs");
});
app.listen(port, () => {
	console.log(`Listining on ${port}`);
});
