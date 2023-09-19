//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

var __dirname = dirname(fileURLToPath(import.meta.url));

const password = "1234567";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});
app.post("/check", (req, res) => {
	if (req.body.password === password) {
		res.sendFile(__dirname + "/public/secret.html");
	} else {
		res.send("<h1>Wrong Password</h1> <a href='/'>Go Back</a>");
	}
});
app.listen(port, () => {
	console.log("Server running on ", port);
});
