// BUBBLE - Classes & Objects

// Declare Global Variables
let player1,player2;
let bubble, bubble2, bubble3, bubble4;

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";
let WHITE = "#ffffff";
let BLACK = "#000000";
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(1000, 800);

	// Initialize Global Variables
	player1 = new Player(200, 600, WHITE, 65, 68, 87, 83)
	player2 = new Player(800, 600, BLACK, 37, 39, 38, 40)
	bubble = new Bubble(400, 100);
	bubble2 = new Bubble(400, 300);
	bubble3 = new Bubble(400, 500);
	bubble4 = new Bubble(400, 700);
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	player1.move();
	player2.move();

	bubble.move();
	bubble2.move();
	bubble3.move();
	bubble4.move();

	// DRAW
	background(GREEN);
	player1.show();
	player2.show();

	bubble.show(GREY);
	bubble2.show(GREY);
	bubble3.show(GREY);
	bubble4.show(GREY);
}

