function isTouching(rect1,rect2)
{
  if(rect2.x-rect1.x<rect1.width/2+rect2.width/2 && rect1.x-rect2.x<rect1.width/2+rect2.width/2 
    &&rect2.y-rect1.y<rect1.height/2+rect2.height/2 && rect1.y-rect2.y<rect1.height/2+rect2.height/2 ){
    
    return true;
  }
  
  
  else {return false;}
}
function bounce(rect1,rect2)
{
  if(rect2.x-rect1.x<rect1.width/2+rect2.width/2 && rect1.x-rect2.x<rect1.width/2+rect2.width/2 ){
    
    rect1.velocityX = rect1.velocityX * (-1);
    rect2.velocityX = rect2.velocityX * (-1);
    return true;
  }
   
  
  else {return false;}
}
