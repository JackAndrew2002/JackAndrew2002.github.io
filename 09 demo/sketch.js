// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 150;
let y = 150;
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colors.push(color(255,255,0));
  colors.push(color(255,167,0));
  colors.push(color(0,0,0));
  colors.push(color(255,0,255));
  colors.push(color(255,255,255));
}

function drawTargetWhile(){
  let diameter = 200;
  let counter = 0;
  while(counter < 5){
    ellipse(width/2, height/2,diameter, diameter);
    diameter -= 40;
    counter ++;
  }
function drawTargetFor(){

  for(let i = 5; i > 0; i--){
    fill(colors[i-1]);
    ellipse(x,y,i*40, i*40);
  }
}
}
function draw(){
  for(let i = 0; i < 5; i++){

  }
}

function draw() {
  background(220);
  //drawTargetWhile();
  drawTargetFor();
}
