// CODE FOR A BUBBLE OBJECT

// bubble class - factory or blueprint to build bubble object
class Bubble {
	constructor(x, y, col) {
		// properties
		// run once a bubble object is made
		this.x = x;
		this.y = y;
		this.r = random(10, 50);
		this.col = col;
		this.xSpeed = random(50);
		this.ySpeed = random(50);
	}

	// medthods
	move() {
		// move randomly
		this.x += this.xSpeed;
		if (this.x < 0 || this.x > width) {
			this.xSpeed = -this.xSpeed;
		}

		// Move & Bounce Vertically
		this.y += this.ySpeed;
		if (this.y < 0 || this.y > height) {
			this.ySpeed = -this.ySpeed;
		}
	}

	show(aCol) {
		// Draw Bubble
		
		fill(aCol);
		ellipse(this.x, this.y, 2 * this.r);
	}
}

