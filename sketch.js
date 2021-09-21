var backgroundImg;
var track1, track2, track3;
var jake, security;
var jakeImg;

function preload(){
backgroundImg = loadImage("Tracks.png");
jakeImg = loadImage("JakeFront.png");
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  edges = createEdgeSprites();

  track1 = createSprite(windowWidth/4,height,width,height);
  track1.scale = 2;
  track1.addImage("track1",backgroundImg);
  track1.velocityY = 5;

  track2 = createSprite(windowWidth/2+50,height,width,height);
  track2.scale = 2;
  track2.addImage("track2",backgroundImg);
  track2.velocityY = 5;

  track3 = createSprite(windowWidth/2+500,height,width,height);
  track3.scale = 2;
  track3.addImage("track3",backgroundImg);
  track3.velocityY = 5;

  jake = createSprite(width/2+45,height-200,20,20);
  jake.scale = 0.2;
  jake.addImage("jake",jakeImg);
  //jake.velocityY = -6;

}

function draw() {

  background("grey");

  
  jake.bounce(edges[0]);
  jake.bounce(edges[1]);

  if(track1.y > height/2){
    track1.y = 350;
  }

  if(track2.y > height/2){
    track2.y = 350;
  }

  if(track3.y > height/2){
    track3.y = 350;
  }

  if(keyDown("LEFT_ARROW")){
    jake.x = jake.x-150;
  }

  if(keyDown("RIGHT_ARROW")){
    jake.x = jake.x+150;
  }

  if(keyDown("UP_ARROW")){
    jake.velocityY = -4;
  }

  //jake.velocityY = jake.velocityY+0.5;

  if(jake.x < 0){
    jake.x = 20;
  }

  if(jake.x > width-20){
    jake.x = width-20;
  }

  drawSprites();
}
