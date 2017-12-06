
//move to the starting position for drawing the flowers
penUp();
moveTo(160, 448);
penDown();

hide();

//draws all the flowers
drawAllFlowers();

//function inside the leaf
function drawStem(){
penColor("green");
moveForward();
drawLeaf();
}

//function for drawing the leaf
function drawLeaf() {
 turnLeft(68);
 arcLeft(90, 12);
 turnLeft(75);
 arcLeft(95,12);
 turnRight(9);
 turnLeft(140);
moveForward(10);
turnLeft();
turnLeft();
moveForward(9);
turnLeft(84);
moveForward(20);
turnRight(3);
}

//function for drawing all the flowers
function drawAllFlowers(){
  for (var i = 0; i < 390; i++) {
    drawFlower();
    moveTo(randomNumber(0, 320), randomNumber(300,490));
    
  }
}
//draws one flower
function drawFlower() {
  turnTo(randomNumber(-10, 10));
  
  penDown();
  drawStem();
  drawBud();
  penUp();
}
  
//draws the actual bulb on the flower
function drawBud(){
  penRGB(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 1);
  dot(6);
 
}
