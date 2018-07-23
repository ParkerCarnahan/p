// CODE FOR A BUBBLE OBJECT

// bubble class - factory or blueprint to build bubble object
class Bubble{
	constructor(x){
		// properties
		// run once a bubblw object is made
		this.x = x;
		this.y = 300;
		this.r = random(10,50);
	}

	// medthods
	move(){
		// move randomly
		this.x += random(-1, 1);
		this.y += random(-1, 1);
	}

	show(){
		// Draw Bubble
		noFill();
		stroke(255, 180);
		strokeWeight(3);
		ellipse(this.x, this.y, 2 * this.r);
	}
}



