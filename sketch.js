var bullet, speed, weight;
var wall, thickness;

function setup() {

  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 30);
  // bullet = shapeColor = color(255, 255, 255);

  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  bullet.velocityX = speed;

}

function draw() {

  background(0); 

  if(hasCollided(bullet, wall)){

    bullet.velocityX = 0;

    var damage = 0.5 * speed * speed * weight/(thickness * thickness * thickness);

    if (damage < 10){
      wall.shapeColor = color(0, 255, 0)
    }

    if (damage > 10){
      wall.shapeColor = color(255, 0, 0)
    }

  }
  
  drawSprites();

}