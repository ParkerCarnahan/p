function initPlatform() {
    // initialize a PLatform object
    platform = {
        // properties
        x: 400,
        y: 450,
        w: 200,
        h: 20,
        col: GREY,
        topCol: ORANGE,
        xSpeed: 5,
        // Methods
        show: function() {
            noStroke();
            // main platform
            fill(this.col);
            rect(this.x, this.y, this.w, this.h);
            // platform top
            fill(this.topCol);
            rect(this.x, this.y, this.w, 2);
        },
        move: function() {
            // move & bounce horizontallly
            this.x += this.xSpeed;
            if (this.x + this.w > width || this.x < 0) {
                this.xSpeed = -this.xSpeed;
            }
        }
    };


}