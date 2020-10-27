var movingsqr,fixedsqr;

function setup() {
  createCanvas(800,400);
  movingsqr=createSprite(400, 200, 50, 50);
  movingsqr.shapeColor="red";
  movingsqr.debug=true;
 fixedsqr=createSprite(200,150,50,50);
 fixedsqr.shapeColor="blue"; 
 fixedsqr.debug=true;

}

function draw() {
  background(0,0,0);  
movingsqr.x=World.mouseX;
movingsqr.y=World.mouseY;
if(movingsqr.x-fixedsqr.x<movingsqr.width/2+fixedsqr.width/2
  && fixedsqr.x-movingsqr.x<movingsqr.width/2+fixedsqr.width/2&&
  movingsqr.y-fixedsqr.y<movingsqr.width/2+fixedsqr.width/2
  && fixedsqr.y-movingsqr.y<movingsqr.width/2+fixedsqr.width/2)
{
  movingsqr.shapeColor="green";
 fixedsqr.shapeColor="green";
}
else
{
  movingsqr.shapeColor=255;
 fixedsqr.shapeColor=255;
}
  drawSprites();
}