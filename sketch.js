var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var bg , snow , snowFlake;

function preload(){
  bg = loadImage("snow.jpg");
  snow = loadImage("snow4.webp");
  snowFlake = loadImage("snow5.webp");
}
 


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < snow.length; i++) {
     
     snow[i].display();
     
   }
   for (var i = 0; i < snowFlake.length; i++) {
     
    snowFlake[i].display();
   }

   for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

 for (var k = 0; k < divisions.length; k++) {
   
   divisions[k].display();
 }
  drawSprites();
   }