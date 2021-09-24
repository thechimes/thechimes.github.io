var ellipseX
var ellipseY
var ellipseSize

function setup() {
var myCanvas = createCanvas(windowWidth, windowHeight);
myCanvas.parent('canvasDiv');
  // background(220);
}

function draw() {
  var ellipseX = mouseX;
  var ellipseY = mouseY;
  var ellipseSize = 100;
  ellipse(ellipseX,ellipseY,ellipseSize,ellipseSize)
}