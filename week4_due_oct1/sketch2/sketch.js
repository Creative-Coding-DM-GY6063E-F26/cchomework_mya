p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false;

function setup() {
  // 8.5" x 11" at 96 dpi
  createCanvas(816, 1056);
  rectMode(CENTER);
}

function keyPressed() {
  if (key === 's') {
    bDoExportSvg = true;
  }
}

function draw() {
  background(255);

  // Start recording this frame to SVG
  if (bDoExportSvg) {
    beginRecordSvg(this, "myOutput.svg");
  }

  noFill();
  stroke(0);

  translate(width / 2, height / 2);

  for (let i = 0; i < 30; i++) {
    rect(1, 0, i * 10, i * 20);
    
  }

  // Stop recording and save the file
  if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}
