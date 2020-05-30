var snake,bug;

function setup() {
  createCanvas(800,500);

  snake = createSprite(400, 250, 20, 20);
  snake.shapeColor = "green";

  bug = createSprite(200,200,20,20);
  bug.shapeColor = "red";
}

function draw() {
  background(0,0,0);  

  /*if (keyCode === DOWN){
    snake.velocityY = 3;
  }

  if (keyCode === UP){
    snake.velocityY = -3;
  }

  if (keyCode === LEFT){
    snake.velocityX = -3;
  }

  if (keyCode === RIGHT){
    snake.velocityX = 3;
  }*/

  if (snake.x-bug.x < snake.width/2+bug.width/2 && bug.x - snake.x < bug.width/2 + snake.width/2
   && snake.y-bug.y < snake.height/2+bug.height/2 && bug.y - snake.y < bug.height/2 + snake.height/2)
   {
      bug.destroy();
      snake.height = snake.height+1 ;
      bug.x = random(20,780);
      bug.y = random(30,470);  
   }

  

  drawSprites();
}