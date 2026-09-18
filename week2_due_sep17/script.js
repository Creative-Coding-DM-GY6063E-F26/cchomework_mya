// change the quotes in this array. Be mindful of the quotation marks!
// this is the only part of the file you need to edit!
const quotes = [
  { text: "something expressive instead of something functional", source: "Wikipedia" },
  { text: "computation as an expressive, analytical, and visualizing medium", source: "NYU Steinhardt" },
  { text: "code and programming to create more expressive, designed web work", source: "Wix Studio Blog" },
  { text: "where self-expression and logic meet to form a beautiful kind of modern art", source: "Egyptian Streets" },
  { text: "using code to express creativity, much like drawing but with programming", source: "GitHub (avishka964)" },
  { text: "discovery, variation, and unexpected exploration", source: "Tim Rodenbröcker" },
  { text: "curiosity fueling experimentation and discovery", source: "Patrik Hübner" },
  { text: "aesthetics and emotional impact, not just efficiency", source: "SMU Meadows School of the Arts" },
  { text: "blending creative technique with software engineering", source: "UCLA CCI Diploma" },
  { text: "an ongoing dialogue between coder and computer", source: "Site of Sites" },
  { text: "expressivity beyond pure engineering", source: "Aesthetic Programming" }
];
// no need to edit anything below this line! 
// if you have made an error, you can check your history to see what might have gone wrong

// a variable tht holds the current quote
let current = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomSeed(millis());
  pickQuote(); // calls the function to pick a quote
}

function pickQuote() {
  // take a random number and use that to identify what quote to use
  current = quotes[floor(random(quotes.length))]; 
}

function draw() {
  background("rgb(15, 14, 14)");
  drawQuote(); // draw the quote on screen
}

function drawQuote() {
  // draw text
  fill('yellow');
  textAlign(CENTER, CENTER);
  text("Creative Coding is ...", width / 4, height / 2 - 48);
  textSize(32);
  textStyle(BOLD);
  text("“" + current.text + "”", width / 2, height / 2);
  textAlign(RIGHT, CENTER);
  text("-" + current.source, width - 100, height - 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newQuote() {
  pickQuote();
  redraw();
}

function mousePressed() {
  newQuote();
}