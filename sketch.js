const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint

var engine , world,polygon,polygonImage;
var constraintlog;


function preload(){
    polygonImage=loadImage("polygon.png");
}

function setup(){
   var Canvas= createCanvas(800,400);

   engine=Matter.Engine.create();
   world=engine.world;

    

    box1=new Box(500,360,20,20);
    box2=new Box(520,360,20,20);
    box3=new Box(540,360,20,20);
    box4=new Box(560,360,20,20);
    box5=new Box(580,360,20,20);
    box6=new Box(600,360,20,20);
    box7=new Box(510,330,20,20);
    box8=new Box(530,330,20,20);
    box9=new Box(550,330,20,20);
    box10=new Box(570,330,20,20);
    
    
    box11=new Box(590,330,20,20);
    box12=new Box(520,310,20,20);
    box13=new Box(540,330,20,20);
    box14=new Box(560,330,20,20);
    box15=new Box(580,330,20,20);
    box16=new Box(530,280,20,20);
    box17=new Box(550,280,20,20);
    box18=new Box(570,280,20,20);
    box19=new Box(540,250,20,20);
    box20=new Box(560,280,20,20);


    box21=new Box(500,360,20,20);
    box22=new Box(500,360,20,20);
    box23=new Box(500,360,20,20);
    box24=new Box(500,360,20,20);
    box25=new Box(500,360,20,20);
    box26=new Box(500,360,20,20);
    box27=new Box(500,360,20,20);
    box28=new Box(500,360,20,20);
    box29=new Box(500,360,20,20);
    box30=new Box(500,360,20,20);

    polygon=new Polygon(0,0,50);

    spring=new Slingshort(polygon.body,{x:200,y:200});

    grouund=new Plateform(400,390,800,20);

    groundover=new Plateform(550,160,200,20);

    Engine.run(engine);

    
}

function draw(){
background("black");
Engine.update(engine);
dubg:true;

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

box6.display();
box7.display();
box8.display();
box9.display();
box10.display();

box11.display();
box12.display();
box13.display();
box14.display();
box15.display();

box16.display();
box17.display();
box18.display();
box19.display();
box20.display();

box21.display();
box22.display();
box23.display();
box24.display();
box25.display();

box26.display();
box27.display();
box28.display();
box29.display();
box30.display();



polygon.display();
spring.display();
grouund.display();
groundover.display();

drawSprite();
}

function mouseDragged(){
Matter.Body.setPosition(polygon,{x:mouse.X,y:mouse.Y});
}

function Released(){
    spring.release();

}



