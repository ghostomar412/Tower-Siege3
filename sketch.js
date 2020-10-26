var engine
var world
var bgImage
var score = 0;
function preload(){
  polygon_img= loadImage("polygon.png");
  getTime();

  
}
function setup() {
  createCanvas(800,600);
  engine = Matter.Engine.create();
  world=engine.world;
  ground=new Ground(400,600,800,10)
  ground1=new Ground(200+400,400,200,10)
  //level 1
  block7=new Block(200+390,255,30,40)
  //level 2
  block8 = new Block (200+330,225,30,40)
  block9 = new Block (200+360,225,30,40)
  block10 = new Block (200+390,225,30,40)
  block11 = new Block (200+420,225,30,40)
  block12 = new Block (200+450,225,30,40)
  //level 3
  block13 = new Block (200+360,195,30,40)
  block14 = new Block (200+390,195,30,40)
  block15 = new Block (200+420,195,30,40)
  //top
  var options = {
    'restitution':0.8,
    'friction':0.5,
    'density':1.2
}
  polygon = Matter.Bodies.circle(58,200,20,options);
  Matter.World.add(world,polygon);

  slingShot = new Chain (this.polygon,{x:200,y:200});
  
}

function draw() {
  if (bgImage){
    background(bgImage);
}
textSize(40);
fill (0,270,150);
text("Score: "+ score,width-500,50)
  Matter.Engine.update(engine);
  ground.display();
  ground1.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  slingShot.display();
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40)
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
  
  
  
  }
  function mouseReleased() {
      slingShot.fly()
    }
  function keyPressed(){
  if(keyCode===32){
  slingShot.attach(polygon)
  }
  
  
  
  
  }
  async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York")
    
    var responseJSON = await response.json();
    console.log(responseJSON)
    var datetime = responseJSON.datetime;
    console.log(datetime)
    hour = datetime.slice(11,13);
    console.log(hour);
    if (hour>=06 && hour <= 18){
    bg="bg.png"
    }
    else{
        bg="bg2.jpg"
    }
    bgImage= loadImage(bg)
    }