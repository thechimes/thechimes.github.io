//audio variables
let vol;
let mic;

//design variables
let darkColor = "#5A5F6E";
let lightColor = "#EFC16C";
let mediumColor = "#EF4539";
let extraColor = "#E5BCAA";
let backgroundColor = '#053939';
let outline = "#2E0503";//usually a dark color

// day and riff name variable
let s = 'Day 7\n"song name"\nby band name';
let s2 = 'Guitar Notes: guitar\n+ pedals';


function setup() {
  createCanvas(windowWidth, windowHeight);
    // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
  
  rectMode(CENTER);
  frameRate(5);
  background(backgroundColor);
  
  //fill for text box
    // scale for resolution change scale(2.0);
  fill(outline);
  noStroke();
  quad(65, windowHeight/2-10, 230, windowHeight/2-10, 230, windowHeight/2+80, 65, windowHeight/2+80);
  //text for day and title—text wraps within the text box
  fill(mediumColor);
  textSize(16);
  textAlign(CENTER);
  text(s, 150, windowHeight/2-25, 150, 150);
  
  fill(mediumColor);
  textAlign(CENTER);
  textSize(12);
  text(s2, 150, windowHeight/2+75,150, 150); 
  
}

function draw() {
    //background is same color as outline but in RGB so alpha can be added if needed
  background(5, 57, 57, 0.9);
  
  noStroke();
  // Get the overall volume (between 0 and 1.0)
  vol = mic.getLevel();
  
  
// MEDIUM VOLUME
  if (vol >= 0.007) {
      push();    translate(random(0,windowWidth), random(0,windowHeight));
      ellipse(10,10, 10,10);
      pop();
  }
  
// LOUD VOLUME
    if (vol >= 0.009) {
      push();    translate(random(0,windowWidth), random(0,windowHeight));
       ellipse(100,100,100,100);
      pop();
  }
  
  // LOUDEST VOLUME 
    if (vol >= 0.03) {
      push();
          translate(random(0,windowWidth), random(0,windowHeight));
       ellipse(1000,1000,1000,1000);
      pop();
  }
  
  else{
    // LOW VOLUME
    push();
    translate(random(0,windowWidth), random(0,windowHeight));
    ellipse(1,1,1,1);
    pop();
    
  }

}
