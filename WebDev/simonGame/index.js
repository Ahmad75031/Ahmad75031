var level = 0;
var colors = ["red", "green", "blue", "yellow"];
var pattern = [];
var current = 0;
$(document).on("keydown", () => {
	if (level == 0) {
		$("h1").text("Level 1");
		gameOn = true;
		current = 0;
		pattern = [];
		randomSelect();
	}
});

$(".box").on("click", function () {
	$("#" + this.id)
		.fadeOut()
		.fadeIn();

	if (pattern[current] == this.id) {
		playAudio(this.id + " audio");
		current++;
	} else {
		playAudio("wrong");
		$("h1").text("Game Over");
		level = 0;
	}
	if (current == pattern.length) {
		current = 0;
		setTimeout(randomSelect, 1500);
	}
});

function randomSelect() {
	var index = Math.floor(Math.random() * 3);
	playAudio(colors[index] + " audio");
	$("#" + colors[index])
		.fadeOut()
		.fadeIn();
	pattern.push(colors[index]);
	level++;
	$("h1").text("Level " + level);
}
function playAudio(id) {
	var audio = $("#" + id)[0];
	audio.play();
}
