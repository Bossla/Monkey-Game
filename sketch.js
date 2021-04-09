
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("Running", monkey_running); 
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();  
  
  score = 0;
}


function draw() {
  background("white");
  
  textSize(20);
  fill("black");
  text("Survival Time: "+ score, 125,50);
  
  if(frameCount % 60 === 0){
    score = score +1;
  }
  
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  monkey.collide(ground)
  
  if(keyDown("space")){
    monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  food();
  obstacles();
  
  obstacleGroup.collide(ground);
  
  drawSprites();
}

function food() { 
  if (frameCount % 80 === 0){
    banana = createSprite(610,465,10,10);
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.1;
    
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
}

function obstacles() { 
  if (frameCount % 300 === 0){
    obstacle = createSprite(610,310,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -7;
    obstacle.velocityY = 2;
    obstacle.setCollider("circle",0,0,200);
    obstacle.debug = false;
    
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
}