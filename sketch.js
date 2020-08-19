var monkey, sceneimage, monkey_walking, obstacleimage, bananaimage, bananagroup, obstacle, obstaclegroup, score, scene, sceneimage, invisground, gameState, PLAY, END, bananas, bananasimage,bananasgroup;

function preload () {
monkey_walking = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png","Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
sceneimage = loadImage("jungle2.jpg");
obstacleimage = loadImage("stone.png");
  
bananaimage = loadImage("Banana.png");
bananasimage = loadImage("Bananas.png");

}
  
function setup() {
scene = createSprite(0,0,0,0);
scene.addImage(sceneimage);
scene.x=scene.width/1.2;

monkey = createSprite(50,300,0,0);
monkey.addAnimation("walk", monkey_walking);
 
invisground = createSprite(0,400,800,5);
invisground.visible=false;
  
  obstaclegroup = createGroup();

  END=0;
  PLAY=1;
  gameState = PLAY;
  
  score=0;
  
  bananagroup = createGroup();
  bananasgroup = createGroup();
}

function draw () {
createCanvas(800,400);
  background(0);
  monkey.scale=0.2;

  if(gameState===PLAY){
  scene.velocityX=-10;
  scene.scale=2;
    
        switch(score) {
      case 10: monkey.scale=0.22;
              break;
      case 20: monkey.scale=0.24;
              break;
      case 30: monkey.scale=0.26;
              break;
      case 40: monkey.scale=0.28;
              break;
      case 50: monkey.scale=0.3;
              break;
      default: break;
    }
    
    if(monkey.isTouching(bananagroup)){
    score=score+5;
    bananagroup.destroyEach();
    }

    if(monkey.isTouching(bananasgroup)){
    score=score+10;
    bananasgroup.destroyEach();
    }
    
    if(monkey.isTouching(obstaclegroup)){
    score=score=0;
    monkey.scale=0.2;
    obstaclegroup.destroyEach();
    }
    
    monkey.velocityY= monkey.velocityY + 0.8;
  monkey.collide(invisground)
  if(scene.x<-220){
  scene.x=scene.width/2
  }
    
   if (keyDown("space")&&monkey.y>305) { 
  monkey.velocityY=-14;
  }
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : " + score, 500, 50);
  
   spawnbanana();
  spawnbananas();
  spawnobstacle();
  
  drawSprites();
  
   text("Score: "+ score, 500,50);
  
}

function spawnbanana () {
if (frameCount % 80 === 0){
  var banana = createSprite (800, 200, 0, 0);
  banana.velocityX=-10;
  banana.lifetime=100;
  banana.scale=0.1;
  banana.addImage("banana", bananaimage);
  bananagroup.add(banana);
}
}
function spawnbananas () {
if (frameCount % 150 === 0){
  var bananas = createSprite (800, 200, 0, 0);
  bananas.velocityX=-10;
  bananas.lifetime=100;
  bananas.scale=0.05;
  bananas.addImage("bananas", bananasimage);
  bananasgroup.add(bananas);
}
}
function spawnobstacle () {
if (frameCount % 80 === 0){
  var obstacle = createSprite (800, 350, 0, 0);
  obstacle.velocityX=-10;
  obstacle.lifetime=100;
  obstacle.scale=0.15 ;
  obstacle.addImage("obstacle", obstacleimage);
  obstaclegroup.add(obstacle);
}
}