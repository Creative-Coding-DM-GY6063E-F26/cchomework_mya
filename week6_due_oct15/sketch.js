let d = 100; // smaller ball so it has room to travel

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // ball moves forward per minute: x position steps across the canvas based on the current minute
  let x = map(minute(), 0, 59, d / 2, width - d / 2);

  // BOUNCE PER SECOND: t goes from 0 to 1 every 1000 milliseconds
  let t = (millis() % 1000) / 1000;
  let bounceHeight = 200;
  let floor = height - d / 2;
  let y = floor - bounceHeight * 4 * t * (1 - t); // up and back down once per second

  // the basketball will rotate per millisecond: angle grows every millisecond
  let angle = millis() * 0.005;

  push();
  translate(x, y);
  rotate(angle);
  basketball();
  pop();
}

function basketball() {
  fill(235, 105, 30);
  stroke(0);
  strokeWeight(3);
  ellipse(0, 0, d, d);

  line(0, -d / 2, 0, d / 2);
  line(-d / 2, 0, d / 2, 0);

  noFill();
  arc(-d / 3, 0, d / 2, d * 0.75, -HALF_PI, HALF_PI);
  arc(d / 3, 0, d / 2, d * 0.75, HALF_PI, -HALF_PI);
}