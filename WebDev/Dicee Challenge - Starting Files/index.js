var player1 = Math.floor(Math.random() * 6);
var player2 = Math.floor(Math.random() * 6);
var imagePath = "images/dice";
if (player1 == 0) {
	player1 = 1;
}
if (player2 == 0) {
	player2 = 1;
}

document
	.querySelector(".player1-img")
	.setAttribute("src", imagePath + player1 + ".png");
document
	.querySelector(".player2-img")
	.setAttribute("src", imagePath + player2 + ".png");
