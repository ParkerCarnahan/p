// GRAVITY BOUNCER - BASIC
"use strict";

// Declare Global Variables

let balls;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);
	
	// Initialize Global Variables
	balls = [];
	for(let y = 300; y <= 600; y++){
		for(let x = 400; x <= 800; x++){
			balls.push(new ball(x,y));
		}
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
