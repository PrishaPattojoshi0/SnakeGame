PLAY = 1;
END = 0;

var snake,bug;

function setup() {
  createCanvas(800,500);

  var gameState = PLAY;

  snake = createSprite(400, 250, 20, 20);
  snake.shapeColor = "green";

  bug = createSprite(200,200,20,20);
  bug.shapeColor = "red";
}

function draw() {
  background(0,0,0); 
   
if (gameState === PLAY){
  if (keyCode === 40){
    snake.velocityY = 3;
  }

  if (keyCode === 38){
    snake.velocityY = -3;
  }

  if (keyCode === 37){
    snake.velocityX = -3;
  }

  if (keyCode === 39){
    snake.velocityX = 3;
  }

  if (snake.x-bug.x < snake.width/2+bug.width/2 && bug.x - snake.x < bug.width/2 + snake.width/2
   && snake.y-bug.y < snake.height/2+bug.height/2 && bug.y - snake.y < bug.height/2 + snake.height/2)
   {
      bug.destroy();
      snake.height = snake.height+1 ;
      bug.x = random(20,780);
      bug.y = random(30,470);  
   }

   if (snake.x-snake.x < snake.width/2+snake.width/2&&snake.x - snake.x<snake.width/2+snake.width/2
    && snake.y-snake.y < snake.height/2+snake.height/2&&snake.y - snake.y<snake.height/2+snake.height/2)
    {
    gameState = END;
    }
  }
  
else if (gameState === END){
  bug.destroy();
  snake.destroy();
  background("red");

  text("Game Over!",200,200);
}

  drawSprites();
}