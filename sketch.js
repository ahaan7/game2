var bg,boyRunning,coins,bird1,bird2
var bgImg,boyRunningImg,coinsImg,bird1Img,bird2Img
var coinsGroup,bird1Group,bird2Group
function preload(){
 bgImg=loadImage("images/bg.jpg")
 boyRunningImg=loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png","images/boy4.png","images/boy5.png")
}

function setup() {
  createCanvas(1000, 500);
bg=createSprite(500,200,1000,500)
bg.addImage(bgImg)
bg.scale=2
boyRunning=createSprite(100,310,20,50) 
boyRunning.addAnimation("running",boyRunningImg) 
}

function draw() {
 background("green") 
 
 drawSprites()   
   }
  
