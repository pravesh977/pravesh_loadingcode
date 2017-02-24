var x = -10; //declares a variable x which will represent the width of the rectangle

function setup() {
  createCanvas(400, 400); //creates a canvas with 400x400 dimension

}

function draw() {
  background(40, 89, 40); //creates a greenish background
  noStroke(); //removes the outline from the rectangle
  fill(255, 0, 0); //fills the rectangle with red color
  rect(0, 210, x, 100); // gives the rectangle its position but has its width occupied by x variable
  
  fill(255,255,255);
  textSize(50); // giving size to the text
  text("LOADING", 60, 285); // shows the loading text
  
  x=x+1; //increases the width of the rectangle by 1px each time

if (x > width) { //tells the program to clear the screen if the width reaches the end of the screen.
background(23);
  
  
}
}

