/**
 * 
 * A simple drawing machine that draws circles when the mouse is pressed.
 * 
 */
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  colors = [color('lightblue'), color('lightcoral')];
}

function draw() {
  noStroke(); 
let i = map(mouseY, 0, height,0,1);
let s = map(mouseY, 0, height, 0, height/2);

console.log('mouse remapped to 0-1:', i);

let c =  lerpColor(colors[0], colors[1], i);



  fill(c);

  if (mouseIsPressed) {
    circle(mouseX, mouseY, s);

  }
}

function keyPressed() {
  if (keyCode === 32) { // Check if the spacebar is pressed
    background(220);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Exercises for you to try :
// 1. Use mouseX or mouseY to change the circle's size or color as you draw.
//    Hint: map(mouseX, 0, width, 5, 100)

