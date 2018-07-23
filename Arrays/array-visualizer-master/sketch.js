// SIMPLE ARRAY VISUALIZER

// Declare Global Variables
let myArray;
let yMin, yMax;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	yMin = 0;
	yMax = 25;
	myArray = [];
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	if (keyIsDown(UP_ARROW)) {
		myArray.push(random(25));
	} else if  (keyCode == DOWN_ARROW){
		myArray.pop();
	}
	// DRAW
	background(225);
	drawArray();
}
// event function 
function keyPressed() {
	if (keyCode == UP_ARROW) {
		// add element to the end of the array
//		myArray.push(random(25));

//		myArray.unshift(random(25));

		// add element to a specific index
//		let middleIndex = Math.floor(myArray.length / 2);
//		myArray.splice(middleIndex, 0, random(25));
	} else if (keyCode == DOWN_ARROW){
		// remove element from array
//		let lastEl = myArray.pop();
//		console.log(lastEl);

		// remove element from the beginning of the array
//		let firstEL = myArray.shift();
//		console.log(firstEL);

		// remove index from the middle
//		let middleIndex = Math.floor(myArray.length / 2);
//		myArray.splice(middleIndex, 1 );
	}
}
