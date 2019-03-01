// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//PART 1
//function setup() {
        //createCanvas(400, 400);
        //noLoop();  //will only run draw() one time.
//}

//function draw() {
  //print (myConstrain(50, 0, 100));   //prints 50
      //print (myConstrain(1, 5, 10));   //prints 5
      //print (myConstrain(-100, -300, -200));   //prints -200
      //print (myConstrain(mouseX, 0, 200));   //prints values beween 0-200
                                      //all right half of sketch will
                                      //print 200
//}

////define your myConstrain function below
//  50 ---------------- 100
// n 40

//function myConstrain( inputValue, floorValue, ceilingValue ){
  //if (inputValue <= ceilingValue && inputValue >= floorValue){
    //return (inputValue)
  //}
  //if (inputValue < floorValue){
    //return (floorValue)
  //}
  //if (inputValue > ceilingValue){
    //return (ceilingValue)
  //}
  //}



  //Exercise 3a and 3b - repeatTalk and printOdds

  //PART 3

function setup() {
  createCanvas(400, 400);
	noLoop();  //will only run draw() one time.
}

function draw() {
  //uncomment the line(s) below to invoke the function(s) you want to test.
	
	//repeatTalk("CS 30");    //should print 1000 lines of "CS 30"
	//printOdds();					  //prints all odd numbers from 1 to 100
}

//define your repeatTalk function below
function repeatTalk(inputValue){
  inputValue(repeatTalk + 1000);
  
}


//define your printOdds function below
function printOdds(){

}
