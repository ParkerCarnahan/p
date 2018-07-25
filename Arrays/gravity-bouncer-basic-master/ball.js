class ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 20;
        this.ySpeed = 0;
        this.a = 0.5;
        this.launchSpeed = random(-30,-1);
    }

    move(){
        // Move & Bounce
        this.y += this.ySpeed; // Move
        this.ySpeed += this.a; // Accelerate
        if (this.y + this.r > height) {
            this.ySpeed = this.launchSpeed; // Bounce
        }
    }

    show(){
        	
	// Draw Gravity Bouncer
	fill(100);
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
