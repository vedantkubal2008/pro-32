const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var rightG,leftG,bottomG,upperG;
var backgroundImg,bg;
var particles = [];
var plinkos1 = [];
var plinkos2 = [];
var plinkos3 = [];
var plinkos4 = [];
var divisions = [];

var divisionHeight = 300;

function preload() {

}

function setup(){
createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  rightG = new Ground(480,400,15,800);
  leftG = new Ground(0,400,15,800);
  bottomG = new Ground(240,800,800,15);

  upperG = new Division(240,785,800,15);

  for(var d=0; d<=width; d=d+80)
   {
     divisions.push(new Division(d,height-divisionHeight/2,10,divisionHeight));
   }
  
  for(var a=40; a<=width; a=a+50)
  {
    plinkos1.push(new Plinko(a,75))
  }

  for(var b=15; b<width-10; b=b+50)
  {
    plinkos2.push(new Plinko(b,175));
  }

  for(var c=40; c<width; c=c+50)
  {
    plinkos3.push(new Plinko(c,275));
  }

  for(var d=15; d<width-10; d=d+50)
  {
    plinkos4.push(new Plinko(d,375));
  }
}

function draw(){

  
    background(0);
    

  Engine.update(engine);
   
  upperG.display();

  for(var z=0; z<=divisions.length-1; z=z+1)
  {
    divisions[z].display();
  }

  for(var e=0; e<=plinkos1.length-1; e=e+1)
  {
    plinkos1[e].display();
  }

  for(var e=0; e<=plinkos1.length-1; e=e+1)
  {
    plinkos2[e].display();
  }

  for(var e=0; e<=plinkos1.length-1; e=e+1)
  {
    plinkos3[e].display();
  }

  for(var e=0; e<=plinkos1.length-1; e=e+1)
  {
    plinkos4[e].display();
  }

  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  

  for(var f=0; f<=particles.length-1; f=f+1)
  {
    particles[f].display();
  }
  
  rightG.display();
  leftG.display();
  bottomG.display();
}
