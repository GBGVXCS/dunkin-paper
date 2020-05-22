var paperObject,ground;
var dustbin
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paperObject = new paper(100,300,10);
	ground = new Ground(200,370,400,30);
	dustbin = new box(330,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

  }
  paperObject.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}



