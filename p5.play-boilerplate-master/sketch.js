const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var slingshot

var block1B
var block2B
var block3B
var block4B
var block5B
var block6B
var block7B
var block8B
var block9B

var block10B
var block11B
var block12B
var block13B
var block14B
var block15B
var block16B

var block1A
var block2A
var block3A
var block4A
var block5A
var block6A
var block7A
var block8A
var block9A
var block10A
var block11A
var block12A
var block13A
var block14A
var block15A
var block16A

var polygon1;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world

  ground = new Ground (400,390,800,25)
  standA = new Ground (390,345,250,10)
  standB = new Ground (630,160,190,10)

  block1A = new Box (390,155,30,40)
  block2A = new Box (420,195,30,40)
  block3A = new Box (390,195,30,40)
  block4A = new Box (360,195,30,40)
  block5A = new Box (450,235,30,40)
  block6A = new Box (420,235,30,40)
  block7A = new Box (390,235,30,40)
  block8A = new Box (360,235,30,40)
  block9A = new Box (330,235,30,40)
  block10A = new Box (300,275,30,40)
  block11A = new Box (330,275,30,40)
  block12A = new Box (360,275,30,40)
  block13A = new Box (390,275,30,40)
  block14A = new Box (420,275,30,40)
  block15A = new Box (450,275,30,40)
  block16A = new Box (480,275,30,40)
  
  block1B = new Box (630,30,30,40)
  block2B = new Box (660,70,30,40)
  block3B = new Box (630,70,30,40)
  block4B = new Box (600,70,30,40)
  block5B = new Box (690,110,30,40)
  block6B = new Box (660,110,30,40)
  block7B = new Box (630,110,30,40)
  block8B = new Box (600,110,30,40)
  block9B = new Box (570,110,30,40)
  
  polygon1 = new Polygon (100,280,40,40)

  slingshot = new SlingShot(polygon1.body, { x: 100, y: 100 });

  Engine.run(engine);

}

function draw() {
  background(0);
 
  standA.display();
  standB.display();
  ground.display();
 
  block1A.display();
  block2A.display();
  block3A.display();
  block4A.display();
  block5A.display();
  block6A.display();
  block7A.display();
  block8A.display();
  block9A.display();
  block10A.display();
  block11A.display();
  block12A.display();
  block13A.display();
  block14A.display();
  block15A.display();
  block16A.display();

  block1B.display();
  block2B.display();
  block3B.display();
  block4B.display();
  block5B.display();
  block6B.display();
  block7B.display();
  block8B.display();
  block9B.display();

  polygon1.display();

  slingshot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  slingshot.fly();
}

