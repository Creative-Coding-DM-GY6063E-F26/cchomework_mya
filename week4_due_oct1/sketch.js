p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false;

function setup() {
  // 8.5" x 11" at 96 dpi
  createCanvas(816, 1056);
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
    beginRecordSvg(this, "plotting1.svg");
  }

  noFill();
  strokeWeight(2);

  // Your ellipses, shifted to sit centered on the letter-size page
  for (let i = 0; i < 750; i += 10) {
    stroke('red');
    ellipse(508, 400, 100 - i, i);

    stroke('blue');
    ellipse(258, 400, 100 - i, 6 - i);
  }

  // Stop recording and save the file
  if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}
