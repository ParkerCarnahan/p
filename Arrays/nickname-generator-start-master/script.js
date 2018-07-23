// NICKNAME GENERATOR
"use strict"; // Use strict mode

// Global Variables

let nickname = [" the Emperor", "the Droideka", " the Jedi", "Twinkle Toes", " the Scientist", " the Tank"]
let index = 0;

// Add Event Listeners
$("#first").on("change", setFirstName);
$("#last").on("change", setLastName);
$("#next").on("click", next);
$("#prev").on("click", prev);
$("#random").on("click", randomNickname);

// Event Functions
function setFirstName() {
	$("#firstDisplay").html($("#first").val());
}

function setLastName() {
	$("#lastDisplay").html($("#last").val());
}

function next() {
	index++;
	if (index === nickname.length){
		index = 0;
	}
	$("#nickname").html(nickname[index])
}

function prev() {
	index--;
	if (index === -1){
		index = nickname.length - 1;
	}
	$("#nickname").html(nickname[index])
}

function randomNickname() {
	let randomIndex = Math.floor(Math.random() * nickname.length);
	$("#nickname").html(nickname[randomIndex])
}


