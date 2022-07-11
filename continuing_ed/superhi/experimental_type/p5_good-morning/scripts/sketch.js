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
    graphic.textSize(100);
    graphic.textLeading(100);
    graphic.fill("#F96AA2");
    graphic.text("Good\nMorning", 600,300);

   // noLoop();
}

function draw(){
    background("#F0F0EE");

    //split up into 10px sections

    const tileSize = 100;

    for(x = 0; x < 12; x = x + 1){
        
        for(y = 0; y < 6; y = y + 1){
            
            //set source dimensions
            const sx = x * tileSize;
            const sy = y * tileSize;
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