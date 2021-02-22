var back, backImg ;
var cat, catIMG ;
var mouse ;

var gameState = "PLAY" ;
function preload() {
  backImg = loadImage("garden.png")
  catImg1= loadAnimation("cat1.png");
  catImg2=loadAnimation("cat2.png","cat3.png");
  catImg3= loadAnimation("cat4.png");
  mouseImg1=loadAnimation("mouse1.png");
  mouseImg2= loadAnimation("mouse2.png","mouse3.png");
  mouseImg3=loadAnimation("mouse4.png");

}
function setup() {
  createCanvas(800,600);
  back = createSprite(400,250, 50, 50);
  back.addImage(backImg);
  back.scale = 1 ;

  cat = createSprite(600,500,1,1);
  cat.addAnimation("lulwut", catImg1);
  cat.scale = 0.2 ;

  mouse = createSprite(200,500,10,10);
  mouse.addAnimation("mousewhat", mouseImg1);
  mouse.scale = 0.15 ;
}
 
function draw() {
  background(0);
  drawSprites();
  
  if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX= 0;
        cat.addAnimation("tomLastImage", catImg3);
        cat.x = 300;
        cat.scale= 0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage", mouseImg3);
        mouse.scale= 0.15 ;
        mouse.changeAnimation("jerryLastImage");
    }  
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5; 
      cat.addAnimation("idk", catImg2);
      cat.changeAnimation("idk");
      
      mouse.addAnimation("idkk", mouseImg2);
      mouse.changeAnimation("idkk");
  }
}
