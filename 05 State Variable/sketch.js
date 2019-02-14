// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 0; //0 - top 1 - right 2 - bottom 3 - left:

const rectSize = 30
let x = 0
let y = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
if (state === 0){
  x += 10;
  if (x > windowWidth - rectSize) state = 1;
}
else if (state === 1){

}
rect(x,y,rectSize, rectSize);
fill(255, 192, 203)

if (state === 1){
  y += 10;
  if (y > windowHeight - rectSize) state = 2;
}
else if (state === 2){

}
if (state === 2){
  x -= 10;
  if (x <=0) state = 3;
}
else if (state === 3){

}
if (state === 3){
  y -= 10;
  if (y <=0) state = 0;
}
else if (state === 0){

}
}

