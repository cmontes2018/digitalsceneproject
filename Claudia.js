
//Claudia made these lines of code 
drawSky();
function drawSky() {
  drawSkyLayers();
  drawAllClouds();
}
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
