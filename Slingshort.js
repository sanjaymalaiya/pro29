class Slingshort{
    constructor(bodyA,pointB){
        var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
        }
        this.pointB=pointB;
        this.body=Constraint.create(options);
        World.add(world,this.body);

    }

    fly(){
        this.body.bodyA=nul;
    }
    display(){
        if(this.body.bodyA){
            var pointA=this.body.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(1);
            stroke("blue");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}
