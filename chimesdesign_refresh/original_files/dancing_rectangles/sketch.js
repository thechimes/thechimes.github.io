var cols = 100;
var rows = 100;
let angle = 0; 
var unit = 100;
var halfunit = unit/2;
var fr = 30;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(fr);

}

function draw(){
var bgColor = color('#9f447a');
      background(bgColor);

  for (var c = 0; c < cols; c++){
      for (var r = 0; r < rows; r++){
        
        var x = (c * unit);
        var y = (r * unit);
        var a = (c * halfunit);
        var b = (r * halfunit);
        
        push();
        translate(x,y);
        dancingRectanglesSame();
        pop();
        
        push();
        translate(a,b);
        dancingRectangles();
        pop();
        
        }// end bracket for rows
    
  }//end bracket for cols
  
  
}

function dancingRectanglesSame(){
        var dance = angle + random(1,20);
      var rectColor = color('#d4b1d4');

        push();
        rotate(dance);
        noStroke();
        fill(rectColor);
        rect(0,0, 10, 1);
        pop();
        //noLoop();
}

function dancingRectangles(){
      var rectColor = color('#d4b1d4');

        push();
        rotate(angle);
        noStroke();
        fill(rectColor);
        rect(0,0, 10, 1);
        angle = angle + random(1,20);
        pop();
        //noLoop();
}
