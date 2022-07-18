let spaceGrotesk;
let graphic

function preload(){
   spaceGrotesk = loadFont("assets/spacegrotesk-medium.otf");
}

function setup(){
    createCanvas(1200,600);

    graphic = createGraphics(1200,600);
    graphic.textFont(spaceGrotesk);
    graphic.textAlign(CENTER, CENTER);
    graphic.textSize(200);
    graphic.textLeading(150);
    graphic.fill("#F96AA2");
    graphic.text("Good\nMorning", 600,300);

   noLoop();
}

function draw(){
    background("#F0F0EE");
    //split up into 10px sections

    const tileSize = 10;

    for(x = 0; x < 120; x = x + 1){
        
        for(y = 0; y < 60; y = y + 1){

            //set distortion
            // tell it how fast to move
            const wave = 0.05; 
            const distortionX = sin(frameCount * wave + x * 0.5 + y * 0.1) * 10;
            const distortionY = sin(frameCount * wave + x * 0.5 + y * 1) * 5;
            
            //set source dimensions
            const sx = x * tileSize + distortionX;
            const sy = y * tileSize + distortionY;
            const sw = tileSize;
            const sh = tileSize; 

            //set destination dimensions
            const dx = x * tileSize;
            const dy = y * tileSize;
            const dw = tileSize;
            const dh = tileSize; 
        
            image(graphic, dx, dy ,dw,dh, sx, sy, sw, sh);
        }
    }
    
}