console.log();

var spot = {
  x: 100,
  y: 50
}

var col = {
r : 252,
g : 223,
b : 215
}

function setup() {
createCanvas(windowHeight,windowWidth);
background(255);
}

function draw() {
  noStroke();
fill(col.r, col.g, col.b, 100);
ellipse(spot.x, spot.y, 40, 40);
spot.x = random(0, width);
spot.y = random(0, height);
col.r = random(218, 252);
col.g = random(229, 240);
col.b = random(225, 245);

}
