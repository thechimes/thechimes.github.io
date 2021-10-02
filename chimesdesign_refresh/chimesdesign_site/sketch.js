var xpos;
var ypos;
var xdist;
var ydist;
var xposT;
var yposT;
var xdistT;
var ydistT;

function setup() {
	createCanvas(windowWidth, windowHeight);
	xpos = 0;
	ypos = 0;
	// set the rotation to degrees and not radians	
	angleMode(DEGREES);
}

function draw() {
	//noStroke();
	stroke(100);
	fill(100, 220, 240, 80);
	// -= is x=x-5 (counting down from X by 5)
  	xpos -= (xpos - mouseX) * .1;
  	ypos -= (ypos - mouseY) * .1;

	xposT -= (xposT - touchX) * .1;
  	yposT -= (yposT - touchY) * .1;

  	xdistT = abs(xposT-touchX);
  	ydistT = abs(yposT-touchY);

  	// absolute value 
  	xdist = abs(xpos-mouseX);
  	ydist = abs(ypos-mouseY);

 	// start controlling the object
 	push();
 	// translate the rectangle from zero to xpos ypos — translate is what is moving it
 	// push / pop — create an object and manipulating the object
 	translate(xpos, ypos);
 	rotate((xpos*ypos)/1000);
 	ellipse(0, 0, xpos-100, ypos-100); // if you want to change the center point, you change the 0 0 — the 00 is like the registration point. 
 	// pop just means "stop changing the thing"
 	pop();

 	push();
 	translate(xposT, yposT);
 	rotate((xposT*yposT)/1000);
 	ellipse(0, 0, xposT-100, yposT-100); 
 	pop();

}

// this resizes drawing to change when window is resized. 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}






