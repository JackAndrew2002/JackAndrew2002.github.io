// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 0;
let y = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(2);

  var x = 50;
  while(x < width){
    line(x,0,x,height);
    x = x + 50; 
  }
  var y = 50;
  while(y < height){
    line(0,y,width, y);
    y = y + 50;
    //fill(int(random(255), 200, 100))
}
}
 