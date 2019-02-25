// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let name = 'Jack Andrew'
let rectSize = 50;
let rectSpeed = -1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  x = mouseX
  y = mouseY
}



function draw() {
//Creates a moving rectangle
  rect(windowWidth/2, windowHeight/2, rectSize, rectSize);
  if(rectSize > 100 || rectSize < 50){
    rectSpeed *= -1;
  }
  rectSize += rectSpeed;

//Creates Text with name on it
  fill(50,205,50);
  textSize(30);
  textFont('Georgia');
  text('Jack Andrew :)', windowWidth - 250, windowWidth - 10);
}


//Allows person to use keys a, s and d to make different shapes with random colours
function keyTyped() {
  if (key === 'a') {
    fill(random(1, 255), random(1, 255), random(1, 255));
    rect(mouseX, mouseY, 55, 100)
  } 
  else if (key === 's') {
    fill(random(1, 255), random(1, 255), random(1, 255));
    ellipse(mouseX, mouseY, 55, 55)
  }
  else if (key === 'd'){
    fill(random(1, 255), random(1, 255), random(1, 255));
    triangle(mouseX += 20, mouseY += 20, mouseX -= 20, mouseY -= 20, mouseX += 20, mouseY -= 20);
  }
  else if (key === " "){
    background(0)
  }

}



