// GRAVITY BOUNCER - BASIC
"use strict";

// Declare Global Variables

let balls;
let player;
let count = 0;

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
	player = []
	for (let n = 0; n < 1 ; n++){
		player.push(new jumpingPlayer(200, 580, BLUE, 65, 68, 87));
	}
	balls = [];
	for (let n = 0; n < 1 ; n++){
		balls.push(new ball(random(800), random(600)));
	}
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	background("orange");

	for(let i = 0; i < player.length; i++){
		player[i].show();
		player[i].move();
	}

	for(let i = 0; i < balls.length; i++){
		balls[i].move();
		balls[i].show();
	}
	for(let i = 0; i < balls.length; i++){
	if (balls.length > 250){
		balls.splice(i, 1)
	}

	for(let i = 0; i < player.length; i++){
		if (player[i].click(player[i].x,player[i].y)){
			count + 1;
		}
	}
}
}


function keyPressed() {
	if (keyCode == 49){
	balls.push(new ball(mouseX, mouseY));
	}
}

function mousePressed(){

	for(let i = 0; i < balls.length; i++){
	if (balls[i].clicked(mouseX, mouseY)){
		balls.splice(i, 1);
		balls.push(new ball(random(800), random(600)))
		balls.push(new ball(random(800), random(600)))

	}
}

}
