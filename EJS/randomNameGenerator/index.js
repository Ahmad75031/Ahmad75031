import express from "express";
import {
	uniqueNamesGenerator,
	adjectives,
	colors,
	animals,
} from "unique-names-generator";
const app = express();
const port = 3000;

var name;
app.use(express.static("public"));
app.use(RandomName);
app.get("/", (req, res) => {
	res.render("index.ejs", { name: name });
});

app.listen(port, () => {
	console.log(`Listining at ${port}`);
});

function RandomName(req, res, next) {
	name = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
	next();
}
