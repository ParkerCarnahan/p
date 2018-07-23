// Player 1 Functions
function initPlayer1() {
	player1 = {
		x: 200,
		y: 580,
		w: 20,
		h: 20,
		xSpeed: 5,
		ySpeed: 0,
		a: 1,
		col: BLUE , 
		// methods (behaviours)
		move: function(){
				// Move Horizontally on Key is Down
				if (keyIsDown(LEFT_ARROW)) {
					this.x += -this.xSpeed;
					// check for left wall
					if (this.x < 0 ) {
						this.x = 0; 
					}
				} else if (keyIsDown(RIGHT_ARROW)) {
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
				// check for roof
				if( this.y < 0 ) {
					this.y = 0;
				}
		},
		show: function() {
			// Draw Player
			noStroke();
			fill(this.col);
			rect(this.x, this.y, this.w, this.h);
		}, 

		jump: function(){
			// Jump on UP_ARROW
			if (keyCode == UP_ARROW) {
				this.ySpeed = -20;
			}
		}
	};
}