
//move to the starting position for drawing the flowers
penUp();
moveTo(0, 448);
penDown();

hide();

//draws one flower
function drawFlower() {
  
for (var i = 0; i < 4; i++) {
  drawStem();
  drawBud();
  
  }
}

drawFlower();

function drawStem(){
penColor("green");
moveForward();
drawLeaf();
}

function drawLeaf() {
 turnLeft(68);
 arcLeft(90, 12);
 turnLeft(75);
 arcLeft(95,12);
 //arcLeft(90, 25);
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

 
function drawColumnOfFlowers(){
  turnRight();
  turnRight();
  moveForward(180);
  turnLeft();
  moveForward(9);
  turnLeft(92.5);
  drawFlower();
  
 for (var i = 0; i < 10; i++) {
    
  turnRight();
  turnRight();
  moveForward(180);
  turnLeft();
  moveForward(9);
  turnLeft();
  drawFlower();
  
  turnRight();
  turnRight();
  moveForward(152);
  turnLeft();
  moveForward(9);
  turnLeft();
  drawFlower();
  
  
  turnRight();
  turnRight();
  moveForward(180);
  turnLeft();
  moveForward(9);
  turnLeft();
  drawFlower();
  
  
  
  turnRight();
  turnRight();
  moveForward(152);
  turnLeft();
  moveForward(9);
  turnLeft();
  drawFlower();
  }
   
  

}

function drawBud(){
  penRGB(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 1);dot(6);
  //turnRight(45);
 //moveForward(3);
 //dot(5);
 //turnLeft();
//turnLeft(90);
///moveForward(5);
///dot(5);
}


drawColumnOfFlowers();
