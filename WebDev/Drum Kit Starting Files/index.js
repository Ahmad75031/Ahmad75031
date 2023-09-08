// document.querySelector("button").addEventListener("click", function () {
// 	alert("Clicked !");
// });

var drums = document.querySelectorAll(".drum");

var audioFileNames = [
	"sounds/tom-1.mp3",
	"sounds/tom-2.mp3",
	"sounds/tom-3.mp3",
	"sounds/tom-4.mp3",
	"sounds/kick-bass.mp3",
	"sounds/snare.mp3",
	"sounds/crash.mp3",
];
var drum_sound = {};
for (var i = 0; i < audioFileNames.length; i++) {
	drum_sound[drums[i].innerHTML] = audioFileNames[i];
}
for (var i = 0; i < drums.length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		playSound(this.innerHTML);
		buttonAnimation(this.innerHTML);
	});
}

document.addEventListener("keydown", function (event) {
	playSound(event.key);
	buttonAnimation(event.key);
});

function playSound(key) {
	var audio = new Audio(drum_sound[key]);
	audio.play();
}
function buttonAnimation(key) {
	var button = document.querySelector("." + key);
	button.classList.add("pressed");
	setTimeout(function () {
		button.classList.remove("pressed");
	}, 1);
}
