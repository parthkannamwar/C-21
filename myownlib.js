function myistouching(obj1,obj2)
{
  if(obj1.x-obj2.x <= obj2.width/2 + obj1.width/2 &&
    obj2.x-obj1.x <= obj2.width/2 + obj1.width/2 && 
    obj2.y-obj1.y<=obj2.height/2 + obj1.height/2 &&
    obj1.y-obj2.y<=obj2.height/2 + obj1.height/2 )
    {
       return true;
     }
 
 else 
 {   
   return false;
 }
 
}

function mybounceOff(obj1,obj2,obj3,obj4)
{
  if(obj1.x-obj2.x <= obj1.width/2 + obj2.width/2 &&
    obj2.x-obj1.x <= obj2.width/2 + obj1.width/2 )
{
    obj1.velocityX=obj1.velocityX*-1;
    obj2.velocityX=obj2.velocityX*-1;
}
if(obj3.y-obj4.y<=obj3.height/2+obj4.height/2 &&
    obj4.y-obj3.y<=obj3.height/2+obj4.height/2)
    {
        obj3.velocityY=obj3.velocityY*-1;
        obj4.velocityY=obj4.velocityY*-1;
    }
}

