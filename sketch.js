
var battleShip, battleShipIMG;
var alienShip, alienShipImg;
var pearl, pearlIMG;
var missiles, missilesImg;
var alienMissiles, alienMissilesIMG;
var engine, world;

var alienShip1,alienShip2,alienShip3,alienShip4,alienShip5;

function preload() {
  battleShipIMG = loadImage("images/battleship.jpg");
  pearlIMG = loadImage("images/pearl.png");
  missilesImg = loadImage("images/battleShipMissiles1.png");
  alienMissilesIMG = loadImage("images/alienmissiles1.png");
  alienshipImg = loadImage("images/alienShip.png");
}

function setup() {
  var canvas = createCanvas(1200, 600);
 
  battleShip = createSprite(700, 200, 60, 60);
  battleShip.addImage(battleShipIMG);
  
  
  pearl = createSprite(700, 400, 10,10)
  pearl.addImage(pearlIMG);
  pearl.scale=0.2
  alienMissiles = createSprite(1000, 100, 100, 100)
 

  alienShip1 = createSprite(200, 400,20,20);
  alienShip1.addImage(alienshipImg);
  alienShip1.scale=0.2
  alienShip2 = createSprite(500, 300,20,20);
  alienShip2.addImage(alienshipImg);
  alienShip2.scale=0.2
  alienShip3 = createSprite(900, 100,20,20);
  alienShip3.addImage(alienshipImg);
  alienShip3.scale=0.2
  alienShip4 = createSprite(800, 500,20,20);
  alienShip4.addImage(alienshipImg);
  alienShip4.scale=0.2
  alienShip5 = createSprite(1000, 300,20,20);
  alienShip5.addImage(alienshipImg);
  alienShip5.scale=0.2
  

alienShip1.velocityX=4;
}

function draw() {
  background("orange");
  edges=createEdgeSprites();
if(alienShip1.isTouching(edges[0])||alienShip1.isTouching(edges[1]))
  alienShip1.velocityX=random(-3,3);
battleShipmovement();
  drawSprites();
 
  
}


//null
function battleShipmovement() {
 
  if (keyDown(LEFT_ARROW)) {
    battleShip.x = battleShip.x - 10
  }
  if (keyDown(RIGHT_ARROW)) {
    battleShip.x = battleShip.x + 10
  }
}

function createBattleShipMissile() {
 
  missiles =createSprite(battleShip.x, battleShip.y, 20, 20);
  missiles.addImage(missilesImg)
  missiles.scale=0.08;
missiles.velocityY=10
 // image(missilesImg, missiles.position.x, missiles.position.y, 10, 10);
  return missiles;
}
function keyPressed() { 
  if (keyCode === 32) { 
    createBattleShipMissile();
    
    //Matter.Body.setVelocity(bms, { x: 0, y: -10 });
 } }

