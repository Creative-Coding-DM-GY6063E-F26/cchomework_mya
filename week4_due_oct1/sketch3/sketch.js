p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false;

// Define your layout variables at the top level
let diaMin = 50;
let diaMax = 800;
let diaStep = 35;

function setup() {
  // 8.5" x 11" canvas at 96 dpi
  createCanvas(816, 1056); 
  
  // Set your drawing styles once if they don't change
  noFill();
  stroke(0);
  strokeWeight(diaStep / 4);
}

function keyPressed() {
  if (key === 's') {
    bDoExportSvg = true;
  }
}

function draw() {
  background(255);

  // Start recording this frame to SVG if requested
  if (bDoExportSvg) {
    beginRecordSvg(this, "plotting1.svg");
  }

  for (let dia = diaMin; dia <= diaMax; dia += diaStep) {
ellipse(400,100,dia,dia)
    ellipse(width / 2, height / 2, dia, dia);
    
  }

  // Stop recording and save the file
  if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}
