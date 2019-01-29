
var canvas;
var settingUp = true;
var numGroup = 0;
var nameDiv;
var names = ["Ricky Martin & Tristen Berger", "Thomas Cahn & Hampton Carver", "Tim Favrot", "Drey Thomas & Chase Bruno"]
var mouseP = [{"x":0,"y":0},{"x":0,"y":0},{"x":0,"y":0},{"x":0,"y":0},{"x":0,"y":0},{"x":0,"y":0},{"x":0,"y":0},{"x":0,"y":0},{"x":0,"y":0},{"x":0,"y":0},{"x":0,"y":0},{"x":-99,"y":-166},{"x":31,"y":-18},{"x":132,"y":95},{"x":177,"y":142},{"x":198,"y":162},{"x":205,"y":169},{"x":205,"y":171},{"x":205,"y":171},{"x":205,"y":172},{"x":205,"y":172},{"x":205,"y":172},{"x":204,"y":172},{"x":204,"y":172},{"x":204,"y":172},{"x":204,"y":172},{"x":204,"y":172},{"x":204,"y":172},{"x":204,"y":172},{"x":204,"y":172},{"x":215,"y":172},{"x":229,"y":172},{"x":244,"y":174},{"x":260,"y":175},{"x":281,"y":175},{"x":302,"y":173},{"x":323,"y":169},{"x":347,"y":164},{"x":375,"y":161},{"x":410,"y":161},{"x":441,"y":170},{"x":460,"y":186},{"x":472,"y":208},{"x":478,"y":233},{"x":479,"y":257},{"x":475,"y":282},{"x":461,"y":302},{"x":411,"y":313},{"x":344,"y":297},{"x":276,"y":253},{"x":229,"y":220},{"x":195,"y":202},{"x":167,"y":196},{"x":139,"y":198},{"x":122,"y":210},{"x":112,"y":227},{"x":107,"y":249},{"x":105,"y":279},{"x":105,"y":302},{"x":107,"y":326},{"x":115,"y":350},{"x":123,"y":369},{"x":132,"y":384},{"x":145,"y":399},{"x":159,"y":411},{"x":174,"y":418},{"x":187,"y":421},{"x":198,"y":422},{"x":210,"y":422},{"x":220,"y":421},{"x":232,"y":416},{"x":243,"y":411},{"x":249,"y":407},{"x":256,"y":401},{"x":262,"y":394},{"x":269,"y":388},{"x":279,"y":381},{"x":300,"y":371},{"x":321,"y":364},{"x":345,"y":361},{"x":365,"y":361},{"x":382,"y":361},{"x":400,"y":363},{"x":417,"y":371},{"x":433,"y":378},{"x":438,"y":382},{"x":439,"y":382},{"x":439,"y":382},{"x":439,"y":382},{"x":439,"y":382},{"x":439,"y":382},{"x":439,"y":382},{"x":439,"y":382},{"x":439,"y":382},{"x":442,"y":382},{"x":452,"y":382},{"x":468,"y":383},{"x":479,"y":382},{"x":488,"y":376},{"x":499,"y":367},{"x":508,"y":358},{"x":512,"y":347},{"x":513,"y":324},{"x":513,"y":306},{"x":513,"y":289},{"x":514,"y":275},{"x":514,"y":259},{"x":514,"y":242},{"x":514,"y":213},{"x":515,"y":192},{"x":518,"y":182},{"x":524,"y":176},{"x":528,"y":173},{"x":532,"y":171},{"x":536,"y":166},{"x":539,"y":159},{"x":540,"y":149},{"x":538,"y":132},{"x":533,"y":111},{"x":529,"y":101},{"x":525,"y":95},{"x":517,"y":92},{"x":507,"y":90},{"x":495,"y":88},{"x":485,"y":87},{"x":474,"y":86},{"x":459,"y":86},{"x":448,"y":86},{"x":439,"y":87},{"x":433,"y":88},{"x":428,"y":91},{"x":422,"y":93},{"x":417,"y":95},{"x":412,"y":97},{"x":412,"y":97},{"x":412,"y":97},{"x":412,"y":97},{"x":412,"y":97},{"x":412,"y":97},{"x":412,"y":97},{"x":412,"y":97},{"x":410,"y":98},{"x":404,"y":104},{"x":399,"y":111},{"x":394,"y":115},{"x":390,"y":120},{"x":384,"y":125},{"x":378,"y":131},{"x":369,"y":141},{"x":362,"y":152},{"x":354,"y":168},{"x":342,"y":191},{"x":326,"y":216},{"x":306,"y":243},{"x":277,"y":279},{"x":250,"y":307},{"x":228,"y":329},{"x":213,"y":341},{"x":204,"y":349},{"x":195,"y":356},{"x":180,"y":368},{"x":160,"y":385},{"x":140,"y":403},{"x":122,"y":417},{"x":108,"y":432},{"x":100,"y":442},{"x":94,"y":454},{"x":92,"y":466},{"x":92,"y":483},{"x":93,"y":493},{"x":100,"y":501},{"x":110,"y":509},{"x":119,"y":517},{"x":126,"y":523},{"x":139,"y":528},{"x":157,"y":533},{"x":178,"y":539},{"x":199,"y":542},{"x":225,"y":544},{"x":253,"y":542},{"x":271,"y":535},{"x":288,"y":526},{"x":306,"y":519},{"x":327,"y":513},{"x":351,"y":508},{"x":376,"y":504},{"x":397,"y":503},{"x":401,"y":503},{"x":401,"y":503},{"x":401,"y":503},{"x":401,"y":503},{"x":401,"y":503},{"x":401,"y":503},{"x":415,"y":503},{"x":445,"y":505},{"x":468,"y":502},{"x":491,"y":490},{"x":508,"y":474},{"x":524,"y":456},{"x":530,"y":446},{"x":527,"y":439},{"x":493,"y":423},{"x":448,"y":409},{"x":394,"y":404},{"x":348,"y":407},{"x":295,"y":421},{"x":256,"y":431},{"x":227,"y":436},{"x":203,"y":442},{"x":185,"y":447},{"x":166,"y":453},{"x":144,"y":457},{"x":131,"y":458},{"x":122,"y":458},{"x":121,"y":457},{"x":121,"y":457},{"x":121,"y":457},{"x":121,"y":457},{"x":121,"y":457},{"x":121,"y":457},{"x":121,"y":457},{"x":119,"y":457},{"x":112,"y":451},{"x":104,"y":441},{"x":91,"y":429},{"x":78,"y":416},{"x":72,"y":407},{"x":67,"y":394},{"x":64,"y":376},{"x":63,"y":364},{"x":63,"y":350},{"x":65,"y":335},{"x":72,"y":322},{"x":82,"y":313},{"x":93,"y":308},{"x":103,"y":306},{"x":114,"y":306},{"x":126,"y":306},{"x":138,"y":308},{"x":149,"y":309},{"x":159,"y":309},{"x":170,"y":309},{"x":179,"y":305},{"x":188,"y":296},{"x":202,"y":282},{"x":216,"y":265},{"x":229,"y":248},{"x":234,"y":241},{"x":234,"y":241},{"x":234,"y":241},{"x":234,"y":241},{"x":234,"y":241},{"x":234,"y":241},{"x":234,"y":241},{"x":234,"y":236},{"x":239,"y":219},{"x":247,"y":194},{"x":251,"y":180},{"x":252,"y":168},{"x":254,"y":155},{"x":257,"y":140},{"x":259,"y":127},{"x":260,"y":113},{"x":261,"y":102},{"x":262,"y":93},{"x":265,"y":77},{"x":269,"y":65},{"x":274,"y":53},{"x":281,"y":43},{"x":287,"y":38},{"x":293,"y":33},{"x":298,"y":31},{"x":302,"y":30},{"x":302,"y":30},{"x":297,"y":30},{"x":278,"y":33},{"x":252,"y":38},{"x":229,"y":40},{"x":211,"y":41},{"x":198,"y":42},{"x":192,"y":43},{"x":185,"y":45},{"x":175,"y":48},{"x":161,"y":52},{"x":146,"y":57},{"x":119,"y":67},{"x":107,"y":74},{"x":107,"y":74},{"x":107,"y":74},{"x":107,"y":74},{"x":107,"y":74}];
var mouseIndex = 0;

function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("canvasDiv");
  nameDiv = select("#nameDiv");
  nameDiv.html(names[numGroup]);
  setInterval(cycle, 15000);
}

function draw() {
  strokeWeight(1);
  stroke(0);
  // thomasHamp();
  // mouseP.push({x: mouseX, y:mouseY});
  // if (!checked && millis() > 10000) {
  //   console.log(JSON.stringify(mouseP));
  //   checked = true;
  // }
  mouseIndex++;
  mouseIndex %= mouseP.length;

  switch(numGroup) {
    case 0:
      rickyTristen();
      break;
    case 1:
      thomasHamp();
      break;
    case 2:
      tim();
      break;
    case 3:
      dreyChase();
      break;
  }
}


function cycle() {
  numGroup++;
  numGroup%=4;
  settingUp = true;
  nameDiv.html(names[numGroup]);

}

//https://www.openprocessing.org/sketch/313326
//Izzy Dunn

function thomasHamp() {
  colorMode(HSB);
  frameRate(30);
  if (settingUp) {
    background(244, 66, 119);
    settingUp = false;
  }
  stroke(mouseP[mouseIndex].x/2, 255,255, 10);
  if (mouseIndex > 0) {
    var weight=dist(mouseP[mouseIndex].x,mouseP[mouseIndex].y,mouseP[mouseIndex-1].x,mouseP[mouseIndex-1].y);
    strokeWeight(weight);
    point(mouseP[mouseIndex].x,mouseP[mouseIndex].y,mouseP[mouseIndex-1].x,mouseP[mouseIndex-1].y);
  }
}



//We were inspired by Pervis Young's "Horses and Sinuous Figures." Mr. Young's painting evokes a sense of freedom with its muted cool hues and flowing designs. We thought we would do the opposite. The rigid triangle along with quickly changing violent colors makes us anxious. We had the eye attempt to track the mouse, following the viewer.
//Title: The Watcher

//citation;
//https://www.openprocessing.org/sketch/566168;
function dreyChase() {
  frameRate(30);
  colorMode(HSB);
  var x = mouseP[mouseIndex].x;
  var y = mouseP[mouseIndex].y;
  stroke(0);
  background(x%255, y%255, y%255);
  fill(255);
  triangle(width/2, 175, 195, height/2 +70, width/2 +101, height/2 +70);
  ellipse(width/2, height/2, 100, 50);
  fill(x%255, 255, 255);
  ellipse(width/2, height/2, 40);
  fill(0);
  ellipse(x/80+ (width/2), y/80+(height/2), 20);
  fill(255);
}

function tim() {
  frameRate(30);
  background(27, 0, 147);
  colorMode(RGB);
  var f = 2;
  fill(66, 241, 244);
  rect(mouseP[mouseIndex].x-90, 0, constrain(mouseP[mouseIndex].y/f,0,82),height);
  fill(155, 6, 6);
  rect(mouseP[mouseIndex].x-10, 0, constrain(mouseP[mouseIndex].y/f,0,100) ,height);
  fill(232, 108, 37);
  rect(mouseP[mouseIndex].x+25, 0, constrain(mouseP[mouseIndex].y/f,0,40) ,height);
  fill(49, 237, 81);
  rect(mouseP[mouseIndex].x+90, 0, constrain(mouseP[mouseIndex].y/f,0,90),height);
  fill(221, 175, 48);
  rect(mouseP[mouseIndex].x+125, 0, constrain(mouseP[mouseIndex].y/f,0,60),height);
  fill(96, 44, 232);
  rect(mouseP[mouseIndex].x+350, 0, constrain(mouseP[mouseIndex].y/f,0,200),height);
}

//https://www.openprocessing.org/sketch/224799
//Color Squares by MANA+
var lastChecked = 0;
function rickyTristen() {
  if (settingUp) {
    settingUp = false;
    background(random(255),random(255),random(255));
  }
  frameRate(5);
  colorMode(RGB);
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
