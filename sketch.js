
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  dustbin1 = new Dustbin(750,650,45,60)
 paper1 = new Paper(150,650,45,60)
 ground = new Ground(400,height,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display()
  paper1.display()
  drawSprites();
 keyPressed()
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
  Matter. Body. applyForce(paperObject. body, paperObject.body.position, {x:85,y:-85});
  }
  }


