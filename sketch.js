let y = 500; x = 500

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(23, 55, 90);


  stroke(23, 55, 90)
  fill(100, 100, 100)
  circle(x, y, 100)
  
  fill(100, 150, 100)
  circle(x - 50, y, 100)
  
  y = y - 5; x = x - 5;
}  
  console.log(y)
  
  if(y < 0){
  y = 500;
  
}
  if(x < 0) {
  x = 500; 

}
