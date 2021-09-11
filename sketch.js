const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var gamestate="play"



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
endSound=loadSound("assets/pirate_laugh.mp3")
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);
  boat1=new ship(1300,400,150,150)
  boat2=new ship(1000,400,150,150)
  boat3=new ship(1800,450,150,150)
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);
//cannonBall.body.position.x=mouseX
//cannonBall.body.position.y=mouseY

  Engine.update(engine);
  

  cannon.display();
  tower.display();
  cannonBall.display()
  boat1.display()
  boat2.display()
  boat3.display()
  if(gamestate=="play"){
    if(cannonBall.body.position.x>boat1.body.position.x-50&&cannonBall.body.position.x<boat1.body.position.x+50){
      if(cannonBall.body.position.y>boat1.body.position.y-150&&cannonBall.body.position.y<boat1.body.position.y+50){
     console.log("working")
     Matter.Body.setStatic(boat1.body,false)
                      } }
               
                       if(cannonBall.body.position.x>boat2.body.position.x-50&&cannonBall.body.position.x<boat2.body.position.x+50){
                        if(cannonBall.body.position.y>boat2.body.position.y-150&&cannonBall.body.position.y<boat2.body.position.y+50){
                           console.log("working")
                     
                           Matter.Body.setStatic(boat2.body,false)
                         } }
                           if(cannonBall.body.position.x>boat3.body.position.x-50&&cannonBall.body.position.x<boat3.body.position.x+50){
    if(cannonBall.body.position.y>boat3.body.position.y-150&&cannonBall.body.position.y<boat3.body.position.y+50){
   console.log("working")
 
   Matter.Body.setStatic(boat3.body,false)
   
   
     }
 
   }
     if(cannonBall.body.position.x>boat3.body.position.x-50&&cannonBall.body.position.x<boat3.body.position.x+50){
    if(cannonBall.body.position.y>boat3.body.position.y-150&&cannonBall.body.position.y<boat3.body.position.y+50){
   console.log("working")
 
   Matter.Body.setStatic(boat3.body,false)
   
   
     }
 
   }
   if(boat1.body.position.x<tower.body.position.x+100||boat2.body.position.x<tower.body.position.x+100||boat3.body.position.x<tower.body.position.x+100){
   gamestate="end"
    endSound.play()
   }
    }
  if(gamestate=="end"){
    textSize(40)
    fill("yellow")
    text("gameover",500,350)
    boat1.body.position.x+=1
    boat2.body.position.x+=1
    boat3.body.position.x+=1
  }
 
 
 
  
}






function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    cannonBall = new CannonBall(cannon.x, cannon.y);
    cannonBall.shoot()
  }
}