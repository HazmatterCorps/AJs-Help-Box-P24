const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;
var plane; 
var stone1;
var rubber1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(400,200,20,80);
	plane = new Plane(400,height,800,10)

	stone1 = new Stone(100,200,30,30);
	rubber1 = new Rubber(600,200,20,20);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  Engine.update(engine);

  hammer.display();


  plane.display();
  stone1.display();
  rubber1.display();



  
  drawSprites();

}



