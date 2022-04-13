var backgroundImg;
var alienSpaceshipImg, spaceshipImg;
var background;
var spaceship;

function preload(){
  backgroundImg = loadImage("space.jpeg");
  spaceshipImg = loadImage("Spaceship.png");

}

function setup() {
  createCanvas(1400, 800);
  background = createSprite(100, 300, 1200, 800);
  background.addImage("background",backgroundImg);
  background.scale = 1;

  spaceship = createSprite(400, 600, 20, 10);
  spaceship.addImage("spaceship",spaceshipImg )
  spaceship.scale = 0.6;



}
function draw(){
  spaceship.x = mouseX
  drawSprites();

}
