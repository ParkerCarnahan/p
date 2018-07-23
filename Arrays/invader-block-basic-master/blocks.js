class Block{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.xSpeed = 2;
    }
    move(){
        this.x += this.xSpeed;
	    if (this.x < 0 || this.x + 50 > width) {
	    	this.xSpeed = -this.xSpeed; // Change direction
	    	this.y += 50; // Shift down
	}
    }
    show(){
	    noFill();
	    stroke("orange");
        rect(this.x, this.y, 50, 50);
    }
}