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
  //background(0);
}

function draw() {
  determineQuadrant();
  Squares();
  colourSquares();
}

function Squares(){
  rect(0, 0, width/2, height/2);
  rect(width/2, 0, width/2, height/2);
  rect(0, height/2, width/2, height/2);
  rect(width/2, height/2, width/2, height/2);
}

function determineQuadrant(){
 if(mouseX <= width/2){
   if(mouseY <= height/2) quadrant = 1;
   else quadrant = 3;
  }
  else{
    if (mouseX >= width/2){
      if(mouseY >= height/2) quadrant = 4;
      else quadrant = 2; 
    }
  }
  print(quadrant)
} 
function colourSquares(){


  if (quadrant === 1){
    colour1 = 0;
  }
  else{
    colour1 += 10;
  
  }
  fill(colour1,255,150);
    rect(0, 0, width/2, height/2);



  if (quadrant === 2){
    colour2 = 0;
  }
  else{
    colour2 += 10;
  }
  fill(colour2, 60, 70);
    rect(width/2, 0, width/2, height/2);
 
  if (quadrant === 3){
    colour3 = 0;
  }
  else{
    colour3 += 10;
  }
    fill(colour3,30, 200);
    rect(0, height/2, width/2, height/2);


  if (quadrant === 4){
    colour4 = 0;
  }
  else{
    colour4 += 10;
  }
    fill(colour4,200,10);
    rect(width/2, height/2, width/2, height/2);
}
    
  
  
