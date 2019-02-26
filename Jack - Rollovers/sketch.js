// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectX, rectY, rectW, rectH;
let rectColour = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectX = width/2;
  rectY = height;
  rectW = width/2;
  rectH = height/2;
 
}

function draw() {
  background(255);
  fill(rectColour);
  rect(0, 0, rectW, rectH);
  rect(width/2, 0, rectW, rectH);
  rect(0, height/2, rectW, rectH);
  rect(width/2, height/2, rectW, rectH);

if (mouseX <= width/2 && mouseY <= height/2){
  fill(255)
}
 



  
}
