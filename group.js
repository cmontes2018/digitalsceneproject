//draws brown background for flowers
penDown();
penColor("#a87325");
dot(3000);





function drawSky() {

}
drawSky();
//draws one sky layer 
function drawSkyLayer(r, g, b, a) {
  for (var i = 0; i < 50; i++) {
    hide();
    penUp();
    moveTo(randomNumber(0, 320), randomNumber(0, 300));
    penRGB(r, g, b, a);
    dot(10);
  }
}
//Draws the layers of the sky 
function drawSkyLayers() {
  for (var i = 0; i < 50; i++) {
    drawSkyLayer(randomNumber(80, 90), randomNumber(110, 190), randomNumber(225, 255), 0.5);
  }
}
drawSkyLayers();
//draws one cloud
function drawCloud(r, g, b, a) {
  for (var i = 0; i < 1; i++) {
    arcLeft(90, 25);
    moveTo(randomNumber(0, 321), randomNumber(0, 171));
    penRGB(r, g, b, a);
    dot(15);
    penUp();
    move(20, 0);
    penDown();
    penUp();
    dot(20);
    move(20, 0);
    penDown();
    dot(15);
    penUp();
  }
}
//draws all clouds 
function drawAllClouds() {
  for (var i = 0; i < 7; i++) {
    drawCloud(242, 244, 247, 1);
  }
}
drawAllClouds();








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




drawAllTrees();
function drawAllTrees(){
  penUp();
for (var i=0; i<5; i++){
  moveTo(randomNumber(0,321), randomNumber(275,275));
  penDown();
  drawTree();
}


}
//this puts trunk and leaves together
function drawTree(){
  drawLeaves();
  drawTrunk();
  penUp();
}
//this is to draw the trunk
function drawTrunk(){
  centerTree();
  penRGB(142,41,12,0.75);
  penDown();
  penWidth(10);
  moveForward(15);
  turnLeft(180);
  moveForward(30);
  drawLeaves();
  penUp();
}
//this is to center the turtle to make my trunk centered
function centerTree(){
    moveForward(5);
    turnRight(47);
    moveForward(10);
    turnRight(133);
    moveForward(30);
}
// this is the layers on top of eachother to fill in the leaves
function drawLeaves(){
  layerLeaves(5);
  layerLeaves(4);
  layerLeaves(3);
  layerLeaves(2);
  layerLeaves(1);
  penUp();
}
//this is the first layer of leaves
function layerLeaves(size) {
  penRGB(0,200,60,0.4);
  penWidth(5);
  for (var i=0; i<8; i++){
  turnLeft(135);
  arcRight(180,size);
  }
  moveForward(0.5);
}




