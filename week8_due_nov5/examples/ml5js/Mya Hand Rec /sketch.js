let vid;
let handPose;
let hands = [];
let prev = null;
let hue = 200;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  vid = createCapture(VIDEO)
  vid.size(640, 480);
  background(0); // black canvas for light painting
  handPose = await ml5.handPose({ maxHands: 1 }); // only one hand for light painting
  handPose.detectStart(vid, gotHands); // ml5 calls gotHands every time it finds hands
}


function draw() {
  // LIGHT PAINTING
  background(0, 0, 0, 0.05);

  if (hands.length === 0) {
    prev = null;
    return;
  }

  const hand = hands[0];
  const brush = toCanvas(hand.index_finger_tip); // brush is going to have x and y coordinates

if (prev) {
  brush.x = lerp(prev.x, brush.x, 0.3);
  brush.y = lerp(prev.y, brush.y, 0.3);
}

  // FIX: runs every frame now, so the color follows the finger's height
  hue = map(brush.y, 0, height, 0, 360);


  // draw the glowing line
  // FIX: the whole block is back on, with its opening { and closing } together
  if (prev && dist(prev.x, prev.y, brush.x, brush.y) < 150) {
    stroke(hue, 80, 100, 0.3); // wide, soft outer glow
    strokeWeight(20);
    line(prev.x, prev.y, brush.x, brush.y);

    stroke(hue, 30, 100); // thin, bright core
    strokeWeight(4);
    line(prev.x, prev.y, brush.x, brush.y);
  }

  prev = brush;
}

function toCanvas(p) {
  return {
        // flipped, so flipping x again here made the paint move the wrong way
    x: map(p.x, 0, vid.width, width, 0),
    y: map(p.y, 0, vid.height, 0, height),
  };
}

function gotHands(results, err) {
  if (err) {
    console.error(err);
    return;
  }
  hands = results;
}

function keyPressed() {
  if (key === 'c') background(0); // press c to clear
}