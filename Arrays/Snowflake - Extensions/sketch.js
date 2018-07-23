// P5.JS TEMPLATE - COMMENTS
"use strict";

// Declare Global Variables
let xVals, yVals; 

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);

    // Initialize Global Variables
    xVals = [];
    yVals = [];
    for (let n = 0; n < 200; n++) {
        xVals.push(random(width));
        yVals.push(random(height));
    }
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    // RUN LOGIC
    for (let i = 0; i < yVals.length; i++){
        yVals[i] += random(20);
            if (yVals[i] > height) {
            yVals[i] = random(-50, 0)
            xVals[i] = random(width);
        }
    }
    // DRAW FRAME
    background(0);
    noStroke();
    fill(255);
    for (let i = 0; i < xVals.length; i++) {
        ellipse(xVals[i], yVals[i], random(15));
    }
}
