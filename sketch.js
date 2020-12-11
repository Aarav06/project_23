var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	box1 = createSprite(370, 650, 200, 20);
	box2 = createSprite(280, 600, 20, 100);
	box3 = createSprite(460, 600, 20, 100);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	x = Bodies.rectangle(370, 200, 200, 20, { isStatic:true});
	World.add(world, x);
	y = Bodies.rectangle(280, 600, 20, 100, { isStatic:true});
	World.add(world, y);
	z = Bodies.rectangle(460, 600, 20, 100,{ isStatic:true});
	World.add(world, z);
	Matter.Body.setStatic(x, false);
	Matter.Body.setStatic(y, false);
	Matter.Body.setStatic(z, false);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  box1.x = x.position.x;
  box1.y = x.position.y;

  box2.x = y.position.x;
  box1.y = y.position.y;

  box3.x = z.position.x;
  box3.y = z.position.y;
  drawSprites(); 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}