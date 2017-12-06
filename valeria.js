drawAllTrees();
function drawAllTrees(){
  penUp();
for (var i=0; i<5; i++){
  moveTo(randomNumber(0,321), randomNumber(220,240));
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
