// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let slider1;
let slider2;
let slider3;
var radio;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider1 = createSlider(0,255, 120);
  slider1.position(100,700);
  slider1.style('width', '180px');
  slider2 = createSlider(0,255, 120);
  slider2.position(100,750);
  slider2.style('width', '180px');
  slider3 = createSlider(0,255, 120);
  slider3.position(100,800);
  slider3.style('width', '180px');
  
  radio = createRadio();
    radio.option('Ellipse', 1);
    radio.position(40,30);
    radio.option('Rectangle', 2);
    radio.style('width', '60px',);
    textAlign(CENTER);
    fill(255, 0, 0);
  

}

function draw() {
  background(slider1.value());
  print(slider1.value());
  textSize(50);
  Text(slider1.value(), 20,100);


  var val = radio.value();
  if (val === "Ellipse") {
    ellipse(x, y, 25, 25);
    ellipse.position(40, 30);
  }
  else{
    rect(x, y, 25, 25);
    rect.position(40, 30);
  }

  ellipse(x, y, 25, 25)

}

