// INVADER BLOCK BASIC
"use strict";

// Declare Global Variables
let blocks;

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
	blocks = [];
	for (let y = 50; y <= 250; y += 100) {
		for(let x = 0; x <= 500; x+= 100) {
			blocks.push(new Block(x,y));
		}
	}
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	background(50);
	
	//move\
	for(let i = 0; i < blocks.length; i++){
		blocks[i].move();
		blocks[i].show();
	}
}
