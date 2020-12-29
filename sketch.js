var rect1,rect2,rect3,rect4;
var a,b,c,d;
function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(600,200,100,70);
  c=createSprite(200,100,50,70);
  d = createSprite(700,100,50,70);

a.velocityX=1;
b.velocityX=-1;
c.velocityX=4;
d.velocityX=-4;
//rect4.shapeColor="red";
}

function draw() {
  background("black"); 


//console.log(rect2.y-rect1.y);

if(bounce(a,b)){

a.shapeColor="blue";
b.shapeColor="green";
}
else {

a.shapeColor="grey";
b.shapeColor="grey";

}
if(isTouching(c,d)){
  c.shapeColor="blue";
  d.shapeColor="green";
  }
  else {
  
  c.shapeColor="grey";
  d.shapeColor="grey";
  
  }
 
  




  drawSprites();
}




