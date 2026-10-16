function setup() {
  createCanvas(200, 200);

  background("#cecab4");
  
   fill("#FF6600");
  circle(5, 88, 45);
   describe(' first circle is orange off center to the left');

   fill("#FF6600");
  circle(76,92, 45);
    describe(' second circle is orange off center to the right');

   fill("#FF6600");
  circle(142, 102, 45);
    describe(' third circle is orange off center to the right');

    fill('#bb5573');
    quad(180,0,130, 0,130,60,180, 60);
    describe('pink retangle at the top right of canvas');
  
  fill('#315497');
  quad(110,-2,200,-2,202,10,110,10)
   describe('navy blue retangle off the top right hand side');

    fill('#deb297');
   quad(-20, 23, 80, 23, 80, 33, -20, 43);
   describe('beige sorta-retangle off the top left side');
      
  fill('#c02e34');
  quad(110, 130,115, 200, 80, 200, 88, 130);

  

}