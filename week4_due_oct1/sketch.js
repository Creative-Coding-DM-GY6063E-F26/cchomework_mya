p5.disableFriendlyErrors = true;
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

  for (let i = 0; i < 750; i += 10) {
    stroke('red');
    ellipse(508, 400, 100 - i, i);

    stroke('blue');
    ellipse(258, 400, 100 - i, 6 - i);
  }

  if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}
