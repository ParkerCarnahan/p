function platform(x, y, w, h, col, topCol) {
    noStroke();
    // Main Platform
    fill(col);
    rect(x, y, w, h);
    // platform top
    fill(topCol)
    rect(x, y, w, 2);
}
function powerUP(x, y, char) {
    // box
    noStroke();
    fill(0);
    rect(x, y, 20, 20);
    // Text
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text(char, x + 10, y + 16 );
}
function spike(){
    noStroke();
    fill(0);
    triangle(300, 320, 320, 320, 310, 300);
}
function door(x, y, w, h, frame){
    noStroke();
    fill(frame);
    rect(x, y, w , h );
    
    fill(0);
    rect(x + 5, y + 5, w - 10, h - 5);
}
function spikeBridge(){
    noStroke();
    fill(0);
    triangle(300, 320, 320, 320, 310, 300);

    //2
    noStroke();
    fill(0);
    triangle(320, 320, 340, 320, 330, 300);

    //3
    noStroke();
    fill(0);
    triangle(340, 320, 360, 320, 350, 300);

    //4
    noStroke();
    fill(0);
    triangle(360, 320, 380, 320, 370, 300);

    //5
    noStroke();
    fill(0);
    triangle(380, 320, 400, 320, 390, 300);

    //6
    noStroke();
    fill(0);
    triangle(400, 320, 420, 320, 410, 300);

    //7
    noStroke();
    fill(0);
    triangle(420, 320, 440, 320, 430, 300);
}