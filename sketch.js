const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = []
var plinkos = []
var divisions = []

var engine, world;
var divisionHeight = 300;

function setup() {
  createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k + 10, height - divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 25; j <= width; j = j + 55){
    plinkos.push(new Plinkos(j, 75));
  }

  for (var j = 20; j <= width - 10; j = j + 50){
    plinkos.push(new Plinkos(j, 175));
  }

  for (var j = 27; j <= width - 20; j = j + 50){
    plinkos.push(new Plinkos(j, 275));
  }

  for (var j = 40; j <= width - 30; j = j + 50){
    plinkos.push(new Plinkos(j, 375));
  }

  ground1 = new Ground(0, 780, 1200, 15);
  ground2 = new Ground(5, 200, 15, 1200);
  ground3 = new Ground(0, 795, 1200, 15);
  ground4 = new Ground(495, 200, 15, 1200);
  ground5 = new Ground(0, 5, 1200, 15);
}

function draw() {
  background(0);
  Engine.update(engine);

  fill("white");
  ground1.display();

  fill("darkred");
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();

  if (frameCount%60 === 0){
    particles.push(new Particles(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  for (var p = 0; p < particles.length; p++){
    particles[p].display();
  }

  for (var k = 0; k <divisions.length; k++){

    divisions[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  
}