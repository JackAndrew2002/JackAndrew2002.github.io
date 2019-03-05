// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectX, rectY, rectW, rectH;
let rectColour = 255;
let colour1 = 0;
let colour2 = 0;
let colour3 = 0;
let colour4 = 0;
let quadrant = 1;


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
  //noStroke();

if (mouseX <= width/2 && mouseY <= height/2){
  colour1 = 0;
  fill(colour1);
  rect(0, 0, rectW, rectH);
}
else{
  colour1 += 10;
  fill(colour1)

}
if (mouseX <= width/2 && mouseY >= height/2){
  colour2 = 0;
  fill(colour2);
  rect(0, height/2, rectW, rectH);
}  
else{
  colour2 += 10;
  fill(colour2)

}
if (mouseX >= width/2 && mouseY <= height/2){
  colour3 = 0;
  fill(colour3);
  rect(width/2, 0, rectW, rectH);
}
else{
  colour3 += 10;
  fill(colour3)

}
if (mouseX >= width/2 && mouseY <= height/2){
  colour4 += 0;
  fill(colour4);
  rect(0, height/2, rectW, rectH);
} 
else{
  colour4 += 10;
  fill(0)
  
}

if(mouseX >= width/2 && mouseY <= height/2){
  colour4 += 10;
  fill(colour4);
  rect(width, height/2, rectW, rectH);
}

  
}
