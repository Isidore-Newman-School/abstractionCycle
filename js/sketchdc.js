
var canvas;
function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("canvasDiv");
  colorMode(HSB);
}

function draw() {
  dreyChase();
}

function dreyChase() {
  var x = mouseX;
  var y = mouseY;

  //citation;
  //https://www.openprocessing.org/sketch/566168;

  background(mouseX%255, mouseY%255, mouseY%255);
  fill(255);
  triangle(width/2, 175, 195, height/2 +70, width/2 +101, height/2 +70);
  ellipse(width/2, height/2, 100, 50);
  fill(mouseX%255, 255, 255);
  ellipse(width/2, height/2, 40);
  fill(0);
  ellipse(mouseX/80+ (width/2), mouseY/80+(height/2), 20);
  fill(255);


  //We were inspired by Pervis Young's "Horses and Sinuous Figures." Mr. Young's painting evokes a sense of freedom with its muted cool hues and flowing designs. We thought we would do the opposite. The rigid triangle along with quickly changing violent colors makes us anxious. We had the eye attempt to track the mouse, following the viewer.

  //Title: The Watcher

}
