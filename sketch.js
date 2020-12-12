const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

     
    box1 = new Box(200,200,50,60);
    box2 = new Box(240,100,40,70);
    ground=new Ground(200,390,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
     ground.display()

    box1.display();
    box2.display();
}