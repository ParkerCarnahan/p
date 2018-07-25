"use strict"

let stars;

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";
let WHITE = "FFFFFF";

function setup(){
    createCanvas(800,600)
    stars = [];
    for (let n = 0; n < 7 ; n++){
		stars.push(new star(random(800), random(600)));
	}
}

function draw(){

    background("black")
    noStroke();
    fill(255);

    for(let i = 0; i < stars.length; i++){
        stars[i].show();
    }

}

function keyPressed(){
    stars.push(new star(random(800),random(600) ))
}

function mousePressed(){
	for(let i = 0; i < stars.length; i++){
	if (stars[i].clicked(mouseX, mouseY)){
		stars.splice(i, 1);
		
	}
}
}