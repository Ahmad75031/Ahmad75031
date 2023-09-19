import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
	.prompt([
		{
			name: "url",
			message: "Enter url: ",
			type: "input",
		},
	])
	.then((answers) => {
		var qr_svg = qr.image(`${answers.url}`, { type: "png" });
		qr_svg.pipe(fs.createWriteStream("i_love_qr.png"));
	});
