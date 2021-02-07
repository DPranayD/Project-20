var car;
var wall;
var s;
var w;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);

  s = random(59,90);
  w = random(400,1500);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}