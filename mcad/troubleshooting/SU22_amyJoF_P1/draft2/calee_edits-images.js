let imgs = [];

var pdf; // create a variable for a pdf object
var record = false; // set this to false so it doesn't start recording until you tell it to

function preload() {
    myFont = loadFont('fonts/Coronette.otf');
    for (var i = 0; i < 8; i++) {
        imgs[i] = loadImage("img/img_" + i + ".png");
    }
}

function setup() {
    createCanvas(612, 792);//this is the size of a letter-sized page in 72 dpi
    background(255);
    imageMode(CENTER);
    pdf = createPDF(); // initialize the PDF creation
}

function draw() {
  //I removed the text from the p5 file so that it's just the image randomizer to make it easier to deal with
  if (record) { // when record is true, it will begin recording the PDF
    pdf.beginRecord();
  }

  if (record) { // if recording began, save it.
    record = false;
    pdf.save({
        filename: 'itworks',//change filename to whatever makes sense
    });
    }
}

function mouseClicked() {
    var index = int(random(8));
    image(imgs[index], width/2, height/2);//Centering the image on the canvas—this is responsive to whatever your canvas size is
}


function keyTyped() {
    //clear screen
    if (key === 'c') {
        clear();
        background(255);
    }
    //download pdf 
    if (key == 's') {
        record = true;
    }
}

// ref:multi click images - https://editor.p5js.org/NicolasTilly/sketches/dZUpAB3rd https://discourse.processing.org/t/display-images-randomly-by-clicking/17380