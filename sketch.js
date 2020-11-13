
var monkey , monkey_running
var banana ,bananaImage, obstacle1, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var PLAY = 1
var END = 0
var gameState = PLAY
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey = createSprite(80,315,20,20);
  
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  // ground.velocityX = -4
  ground.x = ground.width/2;
  console.log(ground.x)
  obstaclesGroup = new Group();
  bananasGroup = new Group();
}


function draw() {
background("white");
  text("Score: "+ score, 50,50);
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(4);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
   // if(obstaclesGroup.isTouching(monkey)){
   //      gameState = END;
   //  }
  }
  spawnBananas();
  spawnObstacles();
  monkey.collide(ground);
  drawSprites();
}
function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,350,20,20);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
  
    banana.lifetime = 200;

    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;

    bananasGroup.add(banana);
  }
  
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(400,330,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(4);
    obstacle.addImage(obstaceImage);
    //generate random obstacles
    // var rand = Math.round(random(1));
    // switch(rand) {
    //   case 1: obstacle.addImage(obstacle1);
    //           break;
    //   default: break;
    // }
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;

    obstaclesGroup.add(obstacle);
  }
}


