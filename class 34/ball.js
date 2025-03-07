class Ball{
    constructor(x,y,width,height,angle){
        var options = {
            frictionAir:0.05,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height.options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.postion;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellips(0,0,this.width,this.height);
        pop();
    }
}