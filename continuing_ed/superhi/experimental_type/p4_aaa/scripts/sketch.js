let spaceGrotesk;

function preload(){
   spaceGrotesk loadFont("assets/spacegrotesk-medium.otf");
}

function setup(){
    createCanvas(500,500);
}

function draw(){
    backgroundColor("#ef5236");
    fill("#ecf072");
    textSize(400);
    textFont(spaceGrotesk);
    text("a", 500, 500);
}