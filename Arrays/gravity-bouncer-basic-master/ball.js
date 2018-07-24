class ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 20;
        this.ySpeed = 0;
        this.a = 0.5;
        this.launchSpeed = -20;
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

    key(){
        if (keyIsPressed == 49){
            new ball(random(800),random(600))
            console.log(balls)
        }
    }
}
