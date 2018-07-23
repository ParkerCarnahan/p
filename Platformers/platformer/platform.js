// platform class
class Platform{

    constructor(x, y, w){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = 20;
        this.col  = GREY;
        this.topCol = ORANGE;
        this.xSpeed = 5;
    }
        // Methods
        show() {
            noStroke();
            // main platform
            fill(this.col);
            rect(this.x, this.y, this.w, this.h);
            // platform top
            fill(this.topCol);
            rect(this.x, this.y, this.w, 2);
        }
        move() {
            // move & bounce horizontallly
            this.x += this.xSpeed;
            if (this.x + this.w > width || this.x < 0) {
                this.xSpeed = -this.xSpeed;
            }
        }
}
