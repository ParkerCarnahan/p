// BOUNCING CIRCLE BASIC
"use strict";

// BUBBLE - Classes & Objects

// Declare Global Variables
let player1,player2;
let bubble, bubble2, bubble3, bubble4, bubble5, bubble6, bubble7, bubble8, bubble9, bubble10;

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";
let WHITE = "#ffffff";
let BLACK = "#000000";
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	bubble = new Bubble(random(800),random(600));
	bubble2 = new Bubble(random(800),random(600));
	bubble3 = new Bubble(random(800),random(600));
	bubble4 = new Bubble(random(800),random(600));
	bubble5 = new Bubble(random(800),random(600));
	bubble6 = new Bubble(random(800),random(600));
	bubble7 = new Bubble(random(800),random(600));
	bubble8 = new Bubble(random(800),random(600));
	bubble9 = new Bubble(random(800),random(600));
	bubble10 = new Bubble(random(800),random(600));
}


// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	bubble.move();
	bubble2.move();
	bubble3.move();
	bubble4.move();
	bubble5.move();
	bubble6.move();
	bubble7.move();
	bubble8.move();
	bubble9.move();
	bubble10.move();

	// DRAW
	background(GREY);

	bubble.show(ORANGE);
	bubble2.show(ORANGE);
	bubble3.show(ORANGE);
	bubble4.show(ORANGE);
	bubble5.show(ORANGE);
	bubble6.show(ORANGE);
	bubble7.show(ORANGE);
	bubble8.show(ORANGE);
	bubble9.show(ORANGE);
	bubble10.show(ORANGE);

}

