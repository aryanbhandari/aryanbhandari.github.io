function setup() { 
  createCanvas(400, 400);
} 
x=150
function draw() { 
  background(220);
 ellipse(165,165,90,90)
 ellipse(165,125,70,70)
 ellipse(165,95,50,50)
 ellipse(175,95,10,10)
 ellipse(155,95,10,10)
 triangle(165,105,200,110,165,115)
arc(x,165,50,50,PI/4,-PI/4,PIE)
x=x+1
}
