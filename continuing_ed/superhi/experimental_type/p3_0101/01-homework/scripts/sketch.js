let spaceGrotesk;
let graphic;
let graphic2;

function preload(){
    spaceGrotesk = loadFont('assets/spacegrotesk-medium.otf');
}

function setup(){
    createCanvas(500,500);
    textFont(spaceGrotesk);
    //creating a graphic that you can stamp onto other parts of the page
    graphic = createGraphics(500,500);
    graphic.
    fill("#ef5236");
    graphic.textFont(spaceGrotesk);
    graphic.textSize(350);
    graphic.textAlign(CENTER);
    graphic.text("01", width/2, height/2); 

    graphic2 = createGraphics(500,500);
    graphic2.
    fill("#ef5236");
    graphic2.textFont(spaceGrotesk);
    graphic2.textSize(350);
    graphic2.textAlign(CENTER);
    graphic2.text("23", width/2, height/2); 
}

function draw(){
    background("#ecf072");
    //copy the graphic to the page first 4 numbers are what it looks like in its original form and the last ones are what it should look like when you stamp it

    let val = sin(frameCount * 0.5) * 250; 

    //copy(graphic, 0,0,500,500,0,0, 250+ val,500);
    //copy(graphic2,0,0,500,500,250 + val,0,250 - val, 500);

    copy(graphic, 0,0, 250+ val,500,0,0, 250+ val,500);
    copy(graphic2,250 + val,0,250 - val, 500,250 + val,0,250 - val, 500);
    
}