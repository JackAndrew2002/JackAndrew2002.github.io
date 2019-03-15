// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let quadrant = 1;

let colour1 = 255;
let colour2 = 255;
let colour3 = 255;
let colour4 = 255;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  determineQuadrant();
  Squares();
  colourSquares();


function Squares(){
  rect(0, 0, rectW/2, rectH/2);
  rect(width/2, 0, rectW/2, rectH/2);
  rect(0, height/2, rectW/2, rectH/2);
  rect(width/2, height/2, rectW/2, rectH/2);
}

function determineQuadrant(){
 if(mouseX <= width/2){
   if(mouseY >= height/2) quadrant = 1;
   else quadrant = 3;
  }
  else{
  if (mouseX >= width/2){
    if(mouseY <= height/2) quadrant = 4;
    else quadrant = 2; 
    }
  }
} 
function colourSquares(){
if (mouseX <= width/2 && mouseY <= height/2){
    colour1 = 0;
    fill(colour1);
    rect(0, 0, rectW, rectH);
  }
  else{
    colour1 += 10;
    fill(colour1);
  
  }
  if (mouseX <= width/2 && mouseY >= height/2){
    colour2 = 0;
    fill(colour2);
    rect(0, height/2, rectW, rectH);
  }  
  else{
    colour2 += 10;
    fill(colour2);
  
  }
  if (mouseX >= width/2 && mouseY <= height/2){
    colour3 = 0;
    fill(colour3);
    rect(width/2, 0, rectW, rectH);
  }
  else{
    colour3 += 10;
    fill(colour3);
  
  }
  if (mouseX >= width/2 && mouseY <= height/2){
    colour4 += 0;
    fill(colour4);
    rect(0, height/2, rectW, rectH);
  } 
  else{
    colour4 += 10;
    fill(0);
    
  }
  
  if(mouseX >= width/2 && mouseY <= height/2){
    colour4 += 10;
    fill(colour4);
    rect(width, height/2, rectW, rectH);
  }
  else{
    colour4 += 10;
    fill(0);
  }
}
}