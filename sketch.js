



var player,ground;

var delay = 0.1;

FollowChange = 5;

Gravity = 1.5;
Friction = 0.0;

JumpSpeed = -15;

SideSpeed = 5;


function setup() {
createCanvas(1920,1080);


player = createSprite(1920/2,1080/2,50,50);
player.shapeColor = "red";
player.setCollider("rectangle",0,0,50,50);


ground = createSprite(1920/2,1080/1.2,1920,200);
ground.shapeColor = "green";
player.setCollider("rectangle",0,0,50,50)



}




function isTouching(O1,O2)
{
  if (O1.x - O2.x < O2.width/2 + O1.width/2
    && O2.x - O1.x < O2.width/2 + O1.width/2
    && O1.y - O2.y < O2.height/2 + O1.height/2
    && O2.y - O1.y <O2.height/2 + O1.height/2)
  {
   return true;
  }
 else 
 {
  return false;
 }
}



function draw() 
{
 
  background(135, 206, 235); 
  
  textSize(25);
  text( player.velocity,1000,1080/10);
  fill(0, 102, 153);



 
  if(keyDown(RIGHT_ARROW))
  {
    player.setVelocity(SideSpeed*1,player.velocityY);
  }
  else if(keyDown(LEFT_ARROW))
  {
    player.setVelocity(SideSpeed*-1,player.velocityY);
  }
  else if(player.velocityX != 0)
  {
    player.setVelocity(player.velocityX*Friction,player.velocityY);
  }

  if(isTouching(player,ground))
  {
    player.setVelocity(player.velocityX,0);
    if(keyDown(UP_ARROW))
    {
      player.setVelocity(player.velocity.x,JumpSpeed);
    }
  }
  else
  {
    player.setVelocity(player.velocityX,player.velocityY+1*Gravity);
  }
  
  
 drawSprites();

}