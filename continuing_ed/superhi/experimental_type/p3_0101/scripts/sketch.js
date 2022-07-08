function preload(){
    spaceGrotesk = loadFont('assets/spacegrotesk-medium.otf');
}

function setup(){
    createCanvas(600,600);
    textFont(spaceGrotesk);
}

function draw(){
    fill("#ef5236");
    textFont(spaceGrotesk);
    textSize(400);
    textAlign(CENTER);
    text("01", width/2, height/2); 

}