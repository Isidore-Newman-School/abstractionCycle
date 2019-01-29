var canvas;
function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("canvasDiv");

  background(244, 66, 119);
  colorMode(HSB);
}

function draw() {
  thomasHamp();
}

function thomasHamp() {

  var weight=dist(mouseX,mouseY,pmouseX,pmouseY);
  strokeWeight(weight);
  console.log(pmouseX)
  point(mouseX,mouseY,pmouseX,pmouseY);
  stroke(mouseX/2, 255,255, 10);

}
