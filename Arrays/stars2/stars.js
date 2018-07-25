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
    

    clicked(x,y){
        let d = dist(x, y, this.x, this.y)
        if (d < this.r){   
            return true;
        } else {
            return false;
        }
    }
}