import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

var __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.use(BandNameGenerator);
app.post("/submit", (req, res) => {
	res.send(`<h1>Your Band Name is </h1> <p>${bandName}</p>`);
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
function BandNameGenerator(req, res, next) {
	bandName = req.body.street + req.body.pet;
	console.log(bandName);
	next();
}
