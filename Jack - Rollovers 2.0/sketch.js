// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectX, rectY, rectW, rectH;
let rectColour = 0;
let quad1fill = 0;
let quad2fill = 0;
let quad3fill = 0;
let quad4fill = 0;
let quadrant1 = rect(0, 0, rectW, rectH);
let quadrant2 = rect(width/2, 0, rectW, rectH);
let quadrant3 = rect(0, height/2, rectW, rectH);
let quadrant4 = rect(width/2, height/2, rectW, rectH)


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectX = width/2;
  rectY = height;
  rectW = width/2;
  rectH = height/2;
 
}

function draw() {
  background(0);
  fill(rectColour);
  rect(0, 0, rectW, rectH);
  rect(width/2, 0, rectW, rectH);
  rect(0, height/2, rectW, rectH);
  rect(width/2, height/2, rectW, rectH);

if (mouseX <= width/2 && mouseY <= height/2){
  fill(255);
  rect(0, 0, rectW, rectH);
}
if (mouseX <= width/2 && mouseY >= height/2){
  fill(255);
  rect(0, height/2, rectW, rectH);
}  
if (mouseX >= width/2 && mouseY <= height/2){
  fill(255);
  rect(width/2, 0, rectW, rectH);
  
}
if (mouseX >= width/2 && mouseY >= height/2){
  fill(255);
  rect(width/2, height/2, rectW, rectH);
} 

  
}
