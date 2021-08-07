const Engine= Matter.Engine;
const World = Matter.World;
const astronaut = Matter.astronaut;

let Engine
let world

var bg, back
var sleep
var brushing, brush
var Gymming, gym
var Eating, eat 
var astronaut

function Preload (){
bg = loadImage ("images/iss.png");
sleep=loadImage ("images/sleep.png")
brush=loadAnimation ("images/brush.png")
gym= loadAnimation ("images/gym21.png", "images/gym22.png")
eat= loadAnimation ("images/eat1.png", "images/eat2.png")
drink=loadAnimation("images/drink1.png","images/drink2.png")
move= loadanimation ("images/lmofe.png", "images/move1.png")

}

function setup() {
  createCanvas(800,400);
  engine=Engine.createCanvas()
  world=engine.world

 back=createImg('bg');
 back.position=400,200
 back.size (50,50)
 
  astronaut=createSprite(300,230);
  astronaut. addAnimation(sleep);
  astronaut.scale = 0.1;
  World.add(world,astronaut)
}

function draw() {
  background(255,255,255);  

  Text("Instructions:  Up Arrow = brushing ;  Down Arrow = Gymming ;  Left Arrow = Eating ;  Right Arrow = Bathing ;  M = Moving", 30,30);

  if (keyDown("UP_ARROW")){
    astronaut.changeAnimation(brush);
    astronaut.y=350;
    astronaut.velocityX =0;
    astronaut.velocityy=0;
  }

  if (keyDown ("DOWN_ARROW")){
    astronaut.changeAnimation (gym)
    astronaut.velocityX=0
    astronaut.velocityY=0
    astronaut.y=500;
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.changeAnimation(eat)
    astronaut.velocityX=0
    astronaut.velocityY=0
    astronaut.y=500;
  }
 
  if (keyDown("RIGHT_ARROW")){
    astronaut.changeAnimation(bath)
    astronaut.velocityX=0
    astronaut.velocityY=0
    astronaut.y=500
  }

  if(keyDown("m")){
    astronaut.changeAnimation(move);
    astronaut.y=500
    astronaut.velocityX=0.12;
    astronaut.velocityY=0.10
  }
 

  drawSprites();
}