class AlienShip {
 constructor(x,y){
 var options = {
        isStatic:true
        }    
 this.alienShip = Bodies.rectangle(x,y,100,100,options);
 World.add(world,this.alienShip);
 this.alienShipImg=loadImage("images/image(2).png"); 
 this.alienShip.velocity.x=10;
 console.log(this.alienShip.velocity.x)
      }
 display(){
   imageMode(CENTER);
   image(this.alienShipImg,this.alienShip.position.x,this.alienShip.position.y,100,100);
   
 }
}
