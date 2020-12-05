const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var Tree1, Stone1, Ground1, Launcher1;
var Mango1, Mango2, Mango3, Mango4, Mango5, Mango6, Mango7, Mango8, Mango9, Mango10, Mango11, Mango12;
var world;
var Boy;
var Force = 100;


function preload() {
  Boy = loadImage("images/boy.png");
}



function setup() {
  createCanvas(1300, 600);

  engine = Engine.create();
  world = engine.world;
  
  Stone1 = new Stone(235, 420, 30);

  Mango1 = new Mango(1100, 100, 30);
  Mango2 = new Mango(1170, 130, 30);
  Mango3 = new Mango(1010, 140, 30);
  Mango4 = new Mango(1000, 70, 30);
  Mango5 = new Mango(1100, 70, 30);
  Mango6 = new Mango(1000, 230, 30);
  Mango7 = new Mango(900, 230, 40);
  Mango8 = new Mango(1140, 150, 40);
  Mango9 = new Mango(1100, 230, 40);
  Mango10 = new Mango(1200, 200, 40);
  Mango11 = new Mango(1120, 50, 40);
  Mango12 = new Mango(900, 160, 40);

  Tree1 = new Tree(1050, 580);

  Ground1 = new Ground(width / 2, 600, width, 20);
  
  Launcher1 = new Launcher(Stone1.body, {x: 235, y: 420});

  Engine.run(engine);
} 

function draw(){
  
  background(230);
  
  textSize(25);
  text("Press Space to get a second Chance to Play", 50, 50);

  image(Boy, 200, 340, 200, 300);
  
  Stone1.display();

  Tree1.display();

  Ground1.display();

  Launcher1.display();

  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();
  Mango9.display();
  Mango10.display();
  Mango11.display();
  Mango12.display();

  detectollision(Stone1, Mango1);
  detectollision(Stone1, Mango2);
  detectollision(Stone1, Mango3);
  detectollision(Stone1, Mango4);
  detectollision(Stone1, Mango5);
  detectollision(Stone1, Mango6);
  detectollision(Stone1, Mango7);
  detectollision(Stone1, Mango8);
  detectollision(Stone1, Mango9);
  detectollision(Stone1, Mango10);
  detectollision(Stone1, Mango11);
  detectollision(Stone1, Mango12);
  
}


function mouseDragged(){
  Matter.Body.setPosition(Stone1.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  Launcher1.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(Stone1.body, {x: 235, y: 420});
    Launcher1.attach(Stone1.body);
  }
}

function detectollision(stone, mango){
  MangoPos = mango.body.position;
  StonePos = stone.body.position;

  var distance = dist(StonePos.x, StonePos.y, MangoPos.x, MangoPos.y);
  
  if (distance <= mango.r + stone.r){
    Matter.Body.setStatic(mango.body, false);
  }

}
