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
}

function draw(){

    background("black")
    noStroke();
    fill(255);

 
    for(let i = 0; i < stars.length; i++){
        stars[i].show();
    
         if (i > 0) {
            for (let j = 0; j < i; j++){
                stroke("WHITE")
                line(stars[j].x,stars[j].y,stars[i].x, stars[i].y)
            }
        }
    }

}

function keyPressed(){
            stars.pop();
}

function mousePressed(){
    stars.push(new star(mouseX,mouseY));

}
