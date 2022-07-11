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
    background("#ef5236");
    //create a tile 
    const tileSize = 100;

    //first time x is 0, and then we add one for every time we run this until x = 5 for the X
    //horizontal direction
    for(let x = 0; x < 12; x = x + 1){

        //add the vertical direction
        for(let y = 0; y < 12; y = y + 1){
        
        //add distortion
        const distortion = sin(0.05 * frameCount + x * 0.5 + y * 0.5) * 50;
        
        // source info variables—if you change these, it changes what we are sampling.
        const sx = x * tileSize + distortion;
        const sy = y * tileSize;
        const sw = tileSize;
        const sh = tileSize;

        //destination info variables
        const dx = x * tileSize;
        const dy = y * tileSize;
        const dw = tileSize;
        const dh = tileSize;

        // Copy is really slow! this will slow everything down. Copy clones things pixel by pixel. Instead we are going to use image to save our created graphic as an image. We can use this with the createGraphics as well as an image we are loading. Copy and image have opposite areas for the source and the destination, just FYI.
        image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);   

        } 
    }
}