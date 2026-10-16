
function setup() {
  createCanvas(400, 400);
background(220);
}


function draw() {
}

function mousePressed() {
  let newQuad= new Quad(mouseX, mouseY, 50,50);
  newQuad.draw();
}

class Quad {
  constructor(x, y, width, height) {
    this.x=x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    let qp2x = this.x*2 + this.width/2;
    let qp2y = this.y*2 - this.height/2;
    let qp3x = this.x - this.width/2;
    let qp3y = this.y + this.height/2;
    let qp4x = this.x - this.width/2;
    let qp4y = this.y - this.height/2;

    fill(random(255), random(255), random(255));
    quad(this.x, this.y, qp2x, qp2y, qp3x, qp3y, qp4x, qp4y);
  }
}

function drawRandomQuad(x=random(width), y=random(height), r=random(10, 50)) {
 
  fill(random(255), random(255), random(255));
  ellipse(x, y, r * 2, r * 2);
}