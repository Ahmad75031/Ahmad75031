import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

var __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

var messages = [
	"Hey it's a weekday, it's time to work hard!",
	"Hey! It's the weekend,it's time to have fun",
];
var message = "";
app.use((req, res, next) => {
	var day = new Date();
	if (day.getDay() === 0) {
		message = messages[1];
	} else {
		message = messages[0];
	}
	next();
});

app.get("/", (req, res) => {
	var day = new Date();
	res.render(__dirname + "/views/index.ejs", {
		message: message,
	});
});

app.listen(port, () => {
	console.log(`Listining on port ${port}`);
});
