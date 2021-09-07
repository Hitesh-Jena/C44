var playerdot;
var fooddot;                                                         
var scoreboard;



function setup() {
  createCanvas(800,400);
  playerdot = createSprite(400, 200, 30, 30);
  fooddot = createSprite(100,100,20,20);
  scoreboard = 0;
  playerdot.shapeColor = "red";
}

function draw() {
  background("purple");  
  if(keyDown("right_arrow")){
  playerdot.x = playerdot.x + 5;
}
if(keyDown("left_arrow")){
  playerdot.x = playerdot.x - 5;
}
if(keyDown("up_arrow")){
  playerdot.y = playerdot.y - 5;
}
if(keyDown("down_arrow")){
  playerdot.y = playerdot.y + 5;
}
if(playerdot.x >= 780){
playerdot.x = 780

}
if(playerdot.x <= 20){
  playerdot.x = 20
  
  }
if(playerdot.y >= 380){
    playerdot.y = 380
    
}
if(playerdot.y <= 20){
      playerdot.y = 20
      
}
if(playerdot.isTouching(fooddot)){
  fooddot.x = Math.round(random(25,775));
  fooddot.y = Math.round(random(25,375));
  scoreboard = scoreboard + 1;

}
textSize(30)
fill("blue")
strokeWeight(0)
text("score: "+ scoreboard, 370, 25);

  drawSprites();
}