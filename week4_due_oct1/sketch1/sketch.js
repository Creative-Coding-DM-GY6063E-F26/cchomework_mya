// SIMPLE HEAT WAVE
// Press 's' to save heatwave_simple.svg for plotting.

p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false;

function setup() {
  // 8.5" x 11" at 96 dpi
  createCanvas(816, 1056);
  noLoop(); // draw it once
}

function keyPressed() {
  if (key === 's') {
    bDoExportSvg = true;
    redraw();
  }
}

function draw() {
  background(255);

  if (bDoExportSvg) {
    beginRecordSvg(this, "heatwave_simple.svg");
  }

  noFill();
  stroke(215, 30, 80); // pinkish red
  strokeWeight(1);

  // Draw 70 wavy lines, going down the page
  for (let i = 0; i < 70; i++) {
    let y = 100 + i * 12; // each line sits 12 pixels below the last one

    // Waves are tall in the middle of the page and flat at the top and bottom
    let waveHeight = sin(i * 0.045) * 40;

    // Draw one wavy line from left to right
    beginShape();
    for (let x = 60; x <= 756; x += 4) {
      let wave = sin(x * 0.02 + i * 0.15) * waveHeight;
      vertex(x, y + wave);
    }
    endShape();
  }

  if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}