// PLATFORMER LIBRARY

// Declare Global Variables
let player1;

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
	initPlayer1();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	movePlayer1();
	
	// DRAW
    background(GREEN);
	drawPlayer1();

	// test platform library
	platform(150,300,150,20,GREY,ORANGE);// blue door
	platform(400,500,250,20, GREY,ORANGE);// bottom
	platform(450,120,150,20,GREY,ORANGE);// red door
	platform(440,300,100,20,GREY,ORANGE);// smallest

	powerUP(250,280, "?");
	powerUP(500, 100, "S");

    spike();
	
    spikeBridge();

	door(150,260,40,40,BLUE);
	door(560,80,40,40,RED);
}

// EVENT FUNCTIONS
function keyPressed() {
	jumpPlayer1();
}
