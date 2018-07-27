class star{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = random(5);
    }

    show(){
     fill("white");
     ellipse(this.x, this.y, 2 * this.r);
    }
    
}
