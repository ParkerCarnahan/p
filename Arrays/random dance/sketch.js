// SIMPLE ARRAY VISUALIZER

// Declare Global Variables
let myArray;
let yMin, yMax;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	yMin = 0;
	yMax = 50;
	myArray = [];
	for (let n = 0; n <= 50; n ++ ) {
		myArray.push(25);
	}

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	background(225);
	drawArray();
}

// EVENT FUNCTIONS
function keyPressed() {
	if (keyCode == 32) { // #1
		for (let i = 0; i < myArray.length; i++) {
			myArray[i] += random(-1) + random(1);
		}
	}
	if (keyCode == 82) { // #2
		for (let i = 0; i < myArray.length; i++) {
			myArray[i] = 25;
		}
	}
}
