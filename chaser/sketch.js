"use strict";


// declare global variables

let ball;

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";
let WHITE = "#ffffff";
let BLACK = "#000000";

function setup(){
    createCanvas(800,600);

    // Initialize Global Variables

    ball = [];
	for (let n = 0; n < 800 ; n += 800){
        ball.push(new Circle());
	}
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw(){
     // draw 
        background("WHITE");
        

    for(let i = 0; i < ball.length; i++){
        ball[i].movement();
        ball[i].show();
    }
}