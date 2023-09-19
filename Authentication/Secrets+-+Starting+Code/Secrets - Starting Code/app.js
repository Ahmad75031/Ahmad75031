import env from "dotenv";
env.config();
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import mongoose from "mongoose";
import encrypt from "mongoose-encryption";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const userSchema = new mongoose.Schema({
	email: String,
	password: String,
});

userSchema.plugin(encrypt, {
	secret: process.env.SECRET,
	encryptedFields: ["password"],
});

const User = new mongoose.model("User", userSchema);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/login", (req, res) => {
	res.render("login");
});

app.get("/register", (req, res) => {
	res.render("register");
});
app.get("/logout", (req, res) => {
	res.redirect("/");
});
app.post("/register", (req, res) => {
	const user = new User({
		email: req.body.username,
		password: req.body.password,
	});

	user
		.save()
		.then((i) => {
			res.render("secrets");
		})
		.catch((err) => {
			console.log(err);
		});
});
app.post("/login", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	User.findOne({ email: username })
		.then((foundUser) => {
			if (foundUser) {
				if (foundUser.password === password) {
					res.render("secrets");
				}
			} else {
				res.send("<h1>INCORRECT</h1>");
			}
		})
		.catch((err) => {
			console.log(err);
		});
});
app.listen(3000, () => {
	console.log("Server Started on port 3000");
});