const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world, object;

function setup(){ 
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world; 
  var options = {

 isStatic: true

  }
  object = Bodies.rectangle(200,200,100,100,options);

  World.add(world, object); 


} 

function draw(){ 
  background("lightgreen"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,100,100); 
}