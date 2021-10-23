var PLAY = 1;
var END = 0;
var gameState = PLAY;

var background, backgroundImg;
var  bird, bird2, birdImg, bird2Img
var plane, planeImg;

var restart, restartImg;
var gameOver, gameOverImg;

var score

function preload(){
   
    backgroundImg = loadImage("background.png");
    birdImg = loadImage("bird.png");
    bird2Img = loadImage("bird2.png")
    planeImg = loadImage("plane.png");
    gameOverImg = loadImage("game over.png");

}

function setup() {
   
  createCanvas(windowWidth,windowHeight);

   plane = createSprite(100,100,200,30);
   plane.addImage(planeImg);

   gameOver = createSprite(300,100);
   gameOver.addImage(gameOverImg);

   restart = createSprite(300,140);
   restart.addImage(restartImg);

   birdsGroup = createGroup();
 
   score = 0;

}

function draw() {

  Text("Score : "+ score, 500,50);

    if(gameState === PLAY){
      gameOver.visible = false;
      restart.visible = false;

      score = score + Math.round(getFrameRate()/60);

    if(ground.x>0){
       background.x = background.width/2;
    }
   
    spawnBirds();
    plane.y = World.mouseY
    
    if(plane.isTouching(birdsGroup)){
        gameState = END;
      
    }
  }

 else if(gameState === END){
    gameOver.visible = true;
    restart.visible = true;

    background.velocityX = 0;
    plane.velocityY = 0;
 }

 drawSprites();
}

function spawnBirds () {
var select_sprites = Math.round(random(1,2));

if(frameCount % 80){
  if (select_sprites == 1){
   bird = createSprite(40,Math.round(random(50,150)),15,15);
   bird.addImage(birdImg);
   bird.velocityX = 3;
   
  } else if(select_sprites == 2){
    bird2 = createSprite(40,Math.round(random(50,150)),15,15);
    bird2.addImage(bird2Img);
    bird2.velocityX = 3;
  }

} 
  

}