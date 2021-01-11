class Polygon{
    constructor(x,y,radius){
    var option={
        restitution:0.8,
        friction:1.0,
        density:1.0
    }

    this.body=Bodies.circle(x,y,radius,option);
    this.radius=radius;
    polygonImage=loadImage("polygon.png");
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("yellow");
        imageMode(CENTER);
        image(polygonImage,pos.x,pos.y,40,40);
        ellipse(pos.x,pos.y,this.radius);

    }
}
