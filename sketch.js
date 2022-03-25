const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var back
var snow1
function preload(){
  sn1 = loadImage("snow1.jpg");
  sn2 = loadImage("snow2.jpg");
  sn3 = loadImage("snow3.jpg");
  sn4 = loadImage("snow4.webp");
  sn5 = loadImage("snow5.webp");
}

function setup() {
  createCanvas(800,600);
  back = createSprite(400, 250);
  //back(200.100)
 back.addImage(sn3)
 snow1 = createSprite(200,100);
 snow1.addImage(sn4);
 snow1.scale = 0.5;

}

function draw() {
  background(255);  
  snow1.velocityY = (8)
  snow1 = Math.round(random(2,3))
  //image(snow1)
  
  drawSprites();
}