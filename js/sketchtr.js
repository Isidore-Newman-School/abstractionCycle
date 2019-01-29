//https://www.openprocessing.org/sketch/224799
//Color Squares by MANA+

var lastChecked = 0;
var canvas;
function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("canvasDiv");
  background(random(255),random(255),random(255));


}
function draw() {
  //background(random(255),random(255),random(255));
  circlesOrig();
  //circlestwo();
  frameRate(5);
}

function circles() {
  stroke(255,255,255,150);
  strokeWeight(3);

  noStroke();
  // carré
  if (millis() - lastChecked > 100) {
    // grand carré
    for (var x=15;x<900; x=x+178) {
      for (var y=15; y<710 ; y=y+175)
      {
        fill(random(255),random(255),random(255));
        //rect(x,y,160,160);
        ellipse(x,y,160,160);
      }
    }
    lastChecked = millis();
    for (var x=35;x<900; x=x+178) {
      for (var y=40; y<710 ; y=y+175) {
        fill(random(255),random(255),random(255));
        //rect(x,y,120,120);
        ellipse(x-20,y-20,120,120)
      }
    }
  }

  // moyen carré
  for (var x=50;x<900; x=x+178) {
    for (var y=60; y<710 ; y=y+175){
      fill(random(255),random(255),random(255))
      //rect(x,y,90,90);
      ellipse(x-35,y-35,90,90);
      ellipse(x + 50*sin(millis()/100)-30,y + 100*cos(millis()/100)-30,30,30);
    }

  }
  //petit carré
  for (var x=65;x<900; x=x+178){
    for (var y=83; y<710 ; y=y+175){
      fill(random(255),random(255),random(255));
      //rect(x,y,60,60);
      ellipse(x-50,y-52,60,60);
    }
  }
}

function circlesOrig() {
  stroke(255,255,255,150);
  strokeWeight(3);
  // grand carré
  for (var x=15;x<900; x=x+178) {
    for (var y=15; y<710 ; y=y+175)
    {
      fill(random(255),random(255),random(255));
      //rect(x,y,160,160);
      ellipse(x,y,160,160);
    }
  }
  noStroke();
  // carré
  for (var x=35;x<900; x=x+178) {
    for (var y=40; y<710 ; y=y+175) {
      fill(random(255),random(255),random(255));
      //rect(x,y,120,120);
      ellipse(x-20,y-20,120,120)
    }
  }


  // moyen carré
  for (var x=50;x<900; x=x+178) {
    for (var y=60; y<710 ; y=y+175){
      fill(random(255),random(255),random(255))
      //rect(x,y,90,90);
      ellipse(x-35,y-35,90,90);
    }

  }
  //petit carré
  for (var x=65;x<900; x=x+178){
    for (var y=83; y<710 ; y=y+175){
      fill(random(255),random(255),random(255));
      //rect(x,y,60,60);
      ellipse(x-50,y-52,60,60);
    }
  }
}
