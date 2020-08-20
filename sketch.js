
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;

function preload()
{
// boy = loadImage("boy.png")	; // no images present upload them
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200, 600, 30, 80);
	stone= new Stone(200, 550, 20, 20);
	tree = new Tree (600, 680, 100, 600)
mango1 = new Mango(580, 650, 20, 20);
mango2 = new Mango(620, 500, 20, 20);
mango3 = new Mango(640, 550, 20, 20);
mango4 = new Mango(580, 670, 20, 20);
mango5 = new Mango(620, 650, 20, 20);
ground = new Ground(400, 680, 800, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();

 // detectcollision();
 detectcollision(stone, mango1); // pass two values in the function argument as its function definition accepts two arguments

  drawSprites();
 
}
function detectcollision(lstone, lmango){
mangoBodyPosition= lmango.body.position
stoneBodyPosition = lstone.body.position
var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y )
if (distance<=lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango.body, false)
}
}


