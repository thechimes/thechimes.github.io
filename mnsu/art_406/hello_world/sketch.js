var xpos;
var ypos;
var xdist;
var ydist;
var xtarg;
var ytarg;


function setup() {
	createCanvas(windowWidth, windowHeight);
    background(206, 207, 171);
	xpos = 0;
	ypos = 0;
	// set the rotation to degrees and not radians	
	angleMode(DEGREES);

	// two random numbers used as coordinates
	xtarg = random(200, 1000);
	ytarg = random(100, 900);
}

function draw() {
    stroke(32,6,255);
    strokeWeight(2);
    fill(226, 103, 160);

	// -= is x=x-5 (counting down from X by 5)
	// xtarg / ytarg â€”Â move it to these randomly selected coordinates
  	// this is the speed â€”Â multiply by a lower number to make it slower
  	xpos -= (xpos - xtarg) * .05;
  	ypos -= (ypos - ytarg) * .05;

  	// absolute value of the x position
  	xdist = abs(xpos-xtarg);
  	ydist = abs(ypos-ytarg);

  	// && is and AND || is OR
  	// if it is within 1 pixel of the target
  	if(xdist < 5 && ydist < 5){
  		xtarg = random(0, windowWidth);
  		ytarg = random(0, windowHeight);
  	}

 	// start controlling the object
 	push();
 	// translate the rectangle from zero to xpos ypos â€”Â translate is what is moving it
 	// push / pop â€”Â create an object and manipulating the object
 	translate(xpos, ypos);
 	rotate((xpos*ypos)/1000);
    textSize(75);
    text('Hello, world!', xdist, ydist);
 	// ellipse(0, 0, xdist, ydist); // if you want to change the center point, you change the 0 0 â€”Â the 00 is like the registration point. 
 	// pop just means "stop changing the thing"
 	pop();

}

// this resizes drawing to change when window is resized. 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}





