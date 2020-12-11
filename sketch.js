var fixed, moving, wall; 
var car1,car2,bus1,bus2;

function setup() 
{ 
  createCanvas(1200,600); 

  fixed=createSprite(300,200,60,100); 
  moving=createSprite(1000,200,100,60); 
  fixed.shapeColor="green"; 
  moving.shapeColor="green"; 

  car1=createSprite(200,350,50,50);
  car2=createSprite(1000,350,50,50);
  car1.shapeColor="cyan";
  car2.shapeColor="yellow";
  car1.velocityX=3;
  car2.velocityX=-3;

  bus1=createSprite(200,100,30,80);
  bus2=createSprite(200,500,30,80);
  bus1.shapeColor="cyan";
  bus2.shapeColor="yellow";
  bus1.velocityY=3;
  bus2.velocityY=-3;

  wall= createSprite(600,200,30,60);
  wall.shapeColor="green";
} 
function draw() 
{ 
  background(0); 

  
  moving.x=World.mouseX; 
  moving.y=World.mouseY;

  if(myistouching(wall,moving))
  {
    wall.shapeColor="red";
    moving.shapeColor="red";
  }
  else
  {
      
   wall.shapeColor="green";
   moving.shapeColor="green";
  }

  mybounceOff(car2,car1,bus2,bus1);


         drawSprites();
}


