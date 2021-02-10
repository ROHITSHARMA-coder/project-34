class Superhero{
    constructor(x,y,radius){
        var options={
            
            density: 1.0,
            frictionAir:0.005
        }
        this.radius=radius;
        this.image = loadImage("superhero-01.png");
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle)
        ellipseMode(RADIUS);
        stroke("cyan");
        fill("red")
ellipse(0,0,this.radius,this.radius);
pop();
    }
}



















