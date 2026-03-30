//The setup function only happens once
var knox= 0;
function setup() {
	createCanvas(2000,500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(6,78,92); //an RGB color for the canvas' background
  //circle
  fill(0,0,0);
  ellipse(250,250,500,350);
  ellipse(mouseX,250,500,350);
  stroke(247,mouseY,138); // an RGB color for the circle's border
  fill(105,31,79); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,250,400,350); // center of canvas, 20px dia
  ellipse(mouseX,250,350,350);
  stroke(0,0,0);
  fill(255,255,255);
  textFont('Verdana');
  textSize(80);
  text('Knox Qortana music',100,250);
  stroke(255,237,161);
  fill(105,30,86);
  text('Knox Qortana music',100,251)
  }
