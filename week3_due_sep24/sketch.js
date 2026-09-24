function setup() {
  createCanvas(200, 200);
  background("#cecab4");
  
  // LINE BEHIND: drawn first, so shapes cover it
  stroke(0);
  strokeWeight(1);
  line(0, 60, 200, 110);
  
  
    noStroke()    

  fill('#273d79');
 quad(90,75, //top lft
      120,78, // top right
      127,127, //bottom r
      86, 127); // btm lft
 //'blue trap under 2nd circle' ;
  
   fill("#FF6600");
  circle(5, 88, 45);
  // first circle is orange off center to the left')

   fill("#FF6600");
  circle(76,92, 45);
  // second circle is orange off center to the right')

   fill("#FF6600");
  circle(142, 102, 45);
  // ' third circle is orange off center to the right');

    fill('#bb5573');
    quad(180,0,130, 0,130,60,180, 60);
  // 'pink retangle at the top right of canvas');
  
  
  fill('#315497');
  quad(110,-2,200,-2,202,10,110,10)
   describe('navy blue retangle off the top right hand side');

    fill('#deb297');
   quad(-20, 23, 80, 23, 80, 33, -20, 43);
   describe('beige sorta-retangle off the top left side');
  
    fill('#cfded8');
   quad(-20,60, 175,80, 170, 66, -20, 43);
   describe('light blue slant quad off the top left side');
   // LINE FRONT line through beige and bby blue
  
   stroke('#3b5261');
  strokeWeight(3);
  line(0, 34, 25, 63);
  noStroke()    
  // LINE FRONT line through left circle
  stroke(0);
  strokeWeight(3);
  line(2, 95, 65, 2);
  noStroke()

  
  fill('#c02e34');
  quad(140,130,140, 200, 100, 200, 100, 130);
    describe('red retangle off the bottom right side');
  
  fill('#2c519f');
  quad(125,200,147,200,147, 180, 125,180);
    describe('blue mini retangle off the bottom right side');
  
  fill('#1f5171');
 quad(27,125,27, 200, 60, 200, 60, 130);
 describe('blue retangle off the bottom left side');
  
fill('#e0712f');
   quad(15,200,20,200,-0,120, -7, 120);
   describe('orange slant quad off the btm left side');
 
  fill('#e0712f');
   quad(20,128,10,128,2,200,10, 200);
   describe('orange slant quad off the btm left side2');
  
  
 fill('#e0712f');
   quad(50,160,40,160,22,200,30, 200);
   describe('orange slant quad off the btm left side3');
  
 
   fill('#c02e34');
    quad(168, 172,196, 164,197, 190,170, 196)
  describe('A red trape on bottom right.');

  
fill('#c02e34');
rect(44, 175, 35, 17);
arc(58, 175, 14, 14, PI, TWO_PI);
fill('#9e9a92');
arc(58, 175, 14, 14, 0, PI);
describe('A red rect and arc hallowed out');


  fill('#54355d');
  noStroke();
  
rectMode(CENTER)
rect(70, 90, 5, 40);
rect(80, 90, 60, 5);
describe('purple cross line 1');}
