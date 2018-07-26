class ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = random(20);
        this.xSpeed = random(10);
        this.ySpeed = 0;
        this.a = 0.5;
        this.launchSpeed = random(-30, -10);
    }

    move(){
        // Move & Bounce
        this.y += this.ySpeed; // Move
        this.ySpeed += this.a; // Accelerate
        if (this.y + this.r > height) {
            this.ySpeed = this.launchSpeed; // Bounce
        }

        this.x += this.xSpeed;
		if (this.x < 0 || this.x > width) {
			this.xSpeed = -this.xSpeed;
		}
    }

    show(){
        	
	// Draw Gravity Bouncer
	fill("BLUE");
	ellipse(this.x, this.y, 2 * this.r);
    }

    // daniel codes
    clicked(x,y){
        let d = dist(x, y, this.x, this.y)
        if (d < this.r){   
            return true;
        } else {
            return false;
        }
    }

}
