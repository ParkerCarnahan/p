class Circle{
    constructor(){
        this.x = 20;
        this.y = 100;
        this.r = 20;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.col = this.col;
    }
    movement(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (mouseX > this.x){
            this.xSpeed = 5;
        } else if (mouseX < this.x){
            this.xSpeed = -5;
        }
         
        if (mouseY > this.y){
            this.ySpeed = 5;
        }else if(mouseY < this.y){
            this.ySpeed = -5;
    }
}
    show(){
        fill("RED");
        ellipse(this.x,this.y, 2*this.r);
    }
}