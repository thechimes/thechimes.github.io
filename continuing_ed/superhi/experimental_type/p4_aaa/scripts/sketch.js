let spaceGrotesk;

function preload(){
   spaceGrotesk = loadFont("assets/spacegrotesk-medium.otf");
}

function setup(){
    createCanvas(600,600);

    fill("#ecf072");
    // you can center vertically too
    textAlign(CENTER, CENTER);
    textSize(800);
    textFont(spaceGrotesk);
    text("a", 300, 300);
}

function draw(){
    backgroundColor("#ef5236");

    

}