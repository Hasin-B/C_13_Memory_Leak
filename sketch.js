var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obs, obs_1, obs_2, obs_3, obs_4, obs_5, obs_6
var cloud, cloudsGroup, cloudImage;
var score= 0


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  obs_1= loadImage("obstacle1.png")
  obs_2= loadImage("obstacle2.png")
  obs_3= loadImage("obstacle3.png")
  obs_4= loadImage("obstacle4.png")
  obs_5= loadImage("obstacle5.png")
  obs_6= loadImage("obstacle6.png")
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  text("Score " + score, 500, 60)

  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  score= score + Math.round(frameCount/60)          
  
  //spawn the clouds
  spawnClouds();
  spawnObstacles();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 210
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }

}
function spawnObstacles() {
if (frameCount % 60 === 0) {
  obs = createSprite(600, 170)
  obs.velocityX= -9
  var image= Math.round(random(1,6))
  switch(image){
    case 1:
      obs.addImage(obs_1)
      break;
      case 2:
        obs.addImage(obs_2)
        break;
        case 3:
      obs.addImage(obs_3)
      break;
      case 4:
      obs.addImage(obs_4)
      break;
      case 5:
      obs.addImage(obs_5)
      break;  
      case 6:
      obs.addImage(obs_6)
      break;
      deafult:
      break; 
         
  }
  obs.scale=0.8
  obs.lifetime=210
}
}

