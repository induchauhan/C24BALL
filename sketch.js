
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var g,ball,myengine,myworld,mybody,b1,b2,b3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	myengine= Engine.create();
	myworld= myengine.world;
	
    ground=new Ground(400,650,800,20);
	//Create the Bodies Here.
	b1=new Bin(550,590,20,100);
	b2=new Bin(750,590,20,100);
	b3=new Bin(650,630,180,20);
	ball=new Paper(100,630,30);
	Engine.run(myengine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  ball.display();
  drawSprites();
 
}
function keyPressed()
{
	if (keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:135,y:-135});
	}
}



