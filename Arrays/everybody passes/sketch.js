// SIMPLE ARRAY VISUALIZER

// Declare Global Variables
let myArray;
let yMin, yMax;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	yMin = 0;
	yMax = 100;
	myArray = [];
	for (let n = 0; n <= 100; n += 3.43) {
		myArray.push(random(100));
	}

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	background(225);
	drawArray();
}

// EVENT FUNCTIONS
function keyPressed() {
	let count = 0;
	let sum = 0;
	let max = 0;
	let average = 0;
	if (keyCode == 49) { // #1
		for (let i = 0; i < myArray.length; i++) {
			if(myArray[i] < 50) {
				count++;
			}
		}
		console.log(count);
	}

	if (keyCode == 50) { // #2
		for (let i = 0; i < myArray.length; i++) {
			if (myArray[i] < 50) {
				myArray[i] = 50
			}
		}
	}
	if (keyCode == 51){
		for (let i = 0; i < myArray.length; i++) {
			if(myArray[i] = 1){
				max = 1
			}
			console.log("the maximum value is " + max + "." )
		}
	}

	if (keyCode == 52){
		for (let i = 0; i < myArray.length; i++) {

		sum = 

		average = sum / myArray.length

		console.log("The average is " + average + ".");
	}
}
}
