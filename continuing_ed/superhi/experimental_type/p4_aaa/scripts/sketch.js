let graphic;
let spaceGrotesk;

function preload(){
   spaceGrotesk = loadFont("assets/spacegrotesk-medium.otf");
}

function setup(){
    createCanvas(600,600);

    //create graphic
    graphic = createGraphics(600,600)
    // define the graphic 
    graphic.fill("#ecf072");
    // you can center vertically too
    graphic.textAlign(CENTER, CENTER);
    graphic.textSize(800);
    graphic.textFont(spaceGrotesk);
    graphic.text("a", 300, 300);
}

function draw(){
    backgroundColor("#ef5236");

}