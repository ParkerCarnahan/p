// GRAVITY BOUNCER - BASIC
"use strict";

// Declare Global Variables

let balls;

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);
	
	// Initialize Global Variables
	balls = [];
	for (let n = 0; n < 800 ; n+= 50){
		balls.push(new ball(random(800), random(600)));
		console.log(balls);
	}
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	background("orange");

	for(let i = 0; i < balls.length; i++){
		balls[i].move();
		balls[i].show();
	}
	
}

function keyPressed(){
	ball.key();
}
