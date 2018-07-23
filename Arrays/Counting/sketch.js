// SIMPLE ARRAY VISUALIZER

// Declare Global Variables
let myArray;
let yMin, yMax;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	num = 0
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	background(225);
}

// EVENT FUNCTIONS
function keyPressed() {
	if (keyPressed == 49) { // #1
	num = num + 1
	console.log(num)
	}
}