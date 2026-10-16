p5.disableFriendlyErrors = true;
let bDoExportSvg = false;

let diaMin = 50;
let diaMax = 1000;
let diaStep = 50;

let tightness = 0.9;
let offsetX = 30;
let offsetY = 20;

let centerX, centerY;
let topX, topY;

let inkColor, paperColor;

function setup() {
  createCanvas(816, 1056);

  centerX = width / 2;
  centerY = height / 2;
  topX = width * 0.49;
  topY = height * 0.1;

  inkColor = color(0);
  paperColor = color(255);

  noFill();
  stroke(inkColor);
  strokeWeight(1);
}

function keyPressed() {
  if (key === 's') {
    bDoExportSvg = true;
  }
}

function draw() {
  background(paperColor);

  if (bDoExportSvg) {
    beginRecordSvg(this, "plotting2.svg");
  }

  drawRings(centerX, centerY, diaStep);
  drawRings(topX, topY, diaStep);
  drawRings(centerX + offsetX, centerY + offsetY, diaStep * tightness);

  if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}

function drawRings(x, y, step) {
  for (let dia = diaMin; dia <= diaMax; dia += step) {
    ellipse(x, y, dia, dia);
  }
}