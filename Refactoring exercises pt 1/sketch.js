



let borderWidth, borderHeight, bounceWidth, bounceHeight;


function setup() {
createCanvas(windowWidth, windowHeight);

borderWidth=200; borderHeight=300; bounceWidth=random(3,8); bounceHeight=random(3,8); // a = where rect starts from width of screen
                                           // b = where rect starts from height of screen
                                           //c = direction the rectangle goes from start
                                           //d = direction the rectangle goes from start
}

function draw() {
movement(); //plays the movement function

background(80,80,80); //sets colour of background

rect(borderWidth,borderHeight,250,75); //draws rectangle

}


function movement(){

  borderWidth += bounceWidth; borderHeight += bounceHeight;
  
if (borderHeight >= height-75||borderHeight<=0){bounceHeight = bounceHeight*-1;} //Where the rectangle will bounce 
                                 //off on the height of the background

  
if (borderWidth >= width-250||borderWidth<=0){bounceWidth = bounceWidth*-1;} //Where the rectangle will bouce
                                 //off on the width of the background
}