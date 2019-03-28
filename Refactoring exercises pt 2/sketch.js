// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

function setup() {
  createCanvas(480, 270);}


function draw() {

  background(255); // Sets background colour

  stroke(0); 

  line(240, 0, 240, 270); // Makes a black vertical line to make outsides of white boxes

  line(0, 135, 480, 135); // Makes a black horizontal line to make outsides of white boxes

  noStroke();

  fill(0); //


  if (mouseX < 240 && mouseY < 135){ //When mouse is in top left box 
    rect(0,0,240,135);               //it will turn in black
  }

  else if (mouseX > 240 && mouseY < 135){ //When the mouse in in the top right box
    rect(240,0,240,135);                  //it will turn black
  }

  else if (mouseX < 240 && mouseY > 135){ //When the mouse is in the bottom left
    rect(0,135,240,135);                  //box it will turn black
  }

  else if (mouseX > 240 && mouseY > 135){ //When the mouse is in the bottom right
    rect(240,135,240,135);                //box it will turn black
  }

}
