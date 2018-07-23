// SIMPLE ARRAY VISUALIZER

// Declare Global Variables
let myArray;
let yMin, yMax;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	yMin = 0;
	yMax = 15;
	myArray = [10, 5, 5, 10, 5, 5, 5, 10, 5, 5, 5, 5, 10];
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	// DRAW
	background(225);
	drawArray();
}
// event function 
function keyPressed() {
	if (keyCode == 49) { // #1
		for (let i = 0; i < myArray.length; i++) {
			if (myArray[i] == 10){
				myArray.splice(i, 1);
			}
		}
	}
	if (keyCode == 50) { // #1
		for (let i = 0; i < myArray.length; i++) {
			if (myArray[i] == 5){
				myArray.splice(i, 1);
			}
		}
	}
}
