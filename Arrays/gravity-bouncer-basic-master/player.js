
class jumpingPlayer{
	constructor(x, y, col, lk, rk, uk,){
		this.x = x;
		this.y = y;
		this.w = 20;
		this.h = 20;
		this.xSpeed = 10;
		this.ySpeed = 10;
		this.a = 1;
		this.col = col;
		this.leftKey =  lk;
		this.rightKey = rk;
		this.upKey = uk;
		
	}
	// methods
	move(){
		// Move Horizontally on Key is Down
		if (keyIsDown(this.leftKey)) {
			this.x += -this.xSpeed;
			// check for left wall
			if (this.x < 0 ) {
				this.x = 0; 
			}
		} else if (keyIsDown(this.rightKey)) {
			this.x += this.xSpeed;
			// Check for Right Wall
			if (this.x + this.w > 800) {
				this.x = 800 - this.w;
			}
		}

		// Move Vertically - Gravity
		this.y += this.ySpeed; // Move Vertically
		this.ySpeed += this.a; // Apply Gravity
		if (this.y + this.h > height) {
			// Land on Ground
			this.y = height - this.h;
        }
	}
	show(){
		// Draw Player
		noStroke();
		fill(this.col);
		rect(this.x, this.y, this.w, this.h);
	}
}
