var canvas;
function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("canvasDiv");
}

function draw() {

  //finalProject();
  todayInClass();
}

function todayInClass() {
  background(0, 37, 186);
  fill(66, 241, 244);
  rect(mouseX-90, 0, constrain(mouseY,0,82),height);
  fill(155, 6, 6);
  rect(mouseX-10, 0, constrain(mouseY,0,100) ,height);
  fill(232, 108, 37);
  rect(mouseX+25, 0, constrain(mouseY,0,40) ,height);
  fill(49, 237, 81);
  rect(mouseX+90, 0, constrain(mouseY,0,90),height);
  fill(221, 175, 48);
  rect(mouseX+125, 0, constrain(mouseY,0,60),height);
  fill(96, 44, 232);
  rect(mouseX+350, 0, constrain(mouseY,0,200),height);
  fill(0)
  rect(mouseX+84,0,constrain(mouseY,73),height)
}

function finalProject() {
  background(27, 0, 147);
  var f = 100;
  fill(66, 241, 244);
  rect(mouseX-90, 0, constrain(mouseY/f,0,82),height);
  fill(155, 6, 6);
  rect(mouseX-10, 0, constrain(mouseY/f,0,100) ,height);
  fill(232, 108, 37);
  rect(mouseX+25, 0, constrain(mouseY/f,0,40) ,height);
  fill(49, 237, 81);
  rect(mouseX+90, 0, constrain(mouseY/f,0,90),height);
  fill(221, 175, 48);
  rect(mouseX+125, 0, constrain(mouseY/f,0,60),height);
  fill(96, 44, 232);
  rect(mouseX+350, 0, constrain(mouseY/f,0,200),height);
}
