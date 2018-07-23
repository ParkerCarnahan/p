// Player 1 Functions

class Player{
	constructor(x, y, col, lk, rk, uk, dk){
		this.x = x;
		this.y = y;
		this.w = 50;
		this.h = 50;
		this.xSpeed = 5;
		this.ySpeed = 5;
		this.a = 1;
		this.col = col;
		this.leftKey =  lk;
		this.rightKey = rk;
		this.upKey = uk;
		this.downKey = dk;
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
			if (this.x + this.w > 1000) {
				this.x = 1000 - this.w;
			}
		}

		// Move Vertically - Gravity
		this.y += this.ySpeed; // Move Vertically
		// check for roof
		if( this.y < 0 ) {
			this.y = 0;
        }
        else if (this.y > 800){
            this.y = 800;
		}
		
		// Jump on UP_ARROW
		if (keyIsDown(this.upKey)) {
			this.ySpeed = -10
		}

		if (keyIsDown(this.downKey)){
			this.ySpeed = 10
		}
	}
	show() {
		// Draw Player
		noStroke();
		fill(this.col);
		ellipse(this.x, this.y, this.w, this.h);
	}
}
