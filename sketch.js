var box;
var edges;
var bullyGang;
var x=200,y=300;
var pain = 0;
var powerPoint1,powerPoint2,powerPoint3,powerPoint4,powerPointImg;
var power=0;

function preload() {
  powerPointImg = loadImage("guava.png");
}

function setup() {

createCanvas(windowWidth,windowHeight);
    edges = createEdgeSprites();

    box = createSprite(600,500,20,20);
    box.shapeColor="lime";

    powerPoint1=createSprite(windowWidth-100,windowHeight-300);
    powerPoint1.shapeColor="green";
    powerPoint1.addImage(powerPointImg);
    powerPoint1.scale=0.1;

    powerPoint2=createSprite(windowWidth/5,windowHeight/2);
    powerPoint2.shapeColor="green";
    powerPoint2.addImage(powerPointImg);
    powerPoint2.scale=0.1;

    powerPoint3=createSprite(windowWidth/3,windowHeight/6);
    powerPoint3.shapeColor="green";
    powerPoint3.addImage(powerPointImg);
    powerPoint3.scale=0.1;

    powerPoint4=createSprite(windowWidth/2,windowHeight/4);
    powerPoint4.shapeColor="green";
    powerPoint4.addImage(powerPointImg);
    powerPoint4.scale=0.1;

    bullyGang = new Group();

    for(i=0;i<10;i++){
      var rand1 = Math.round(random(50,300));
      var rand2 = Math.round(random(50,300));
      var bully=createSprite(rand1,rand2,30,30);
      bully.velocityX=Math.round(random(-5,7));
      bully.velocityY=Math.round(random(-5,7));

      bullyGang.add(bully);

      
    }

 
    
   /* for(var i=0; i<5;i++){
      for(var j=0; j<i;j++){
        bullies(x+j*50,y+j*50);

      }

      y=y+100;
    }

   */

}

function draw() {
  background("lightgrey");
  
  box.collide(edges);

    box.velocityX=0;
    box.velocityY=0;
    if (keyDown(UP_ARROW)) {
        box.velocityY = -5;
    }
    if (keyDown(DOWN_ARROW)) {
        box.velocityY = 5;
    }
    if (keyDown(RIGHT_ARROW)) {
        box.velocityX =  5;
    }
    if (keyDown(LEFT_ARROW)) {
        box.velocityX = - 5;
    }
    
    if (box.isTouching(powerPoint1)) {
      powerPoint1.destroy();
      power = power+100;
    }
    if (box.isTouching(powerPoint2)) {
      powerPoint2.destroy();
      power = power+100;
    }
    if (box.isTouching(powerPoint3)) {
      powerPoint3.destroy();
      power = power+100;
    }
    if (box.isTouching(powerPoint4)) {
      powerPoint4.destroy();
      power = power+100;
    }
/*
    if(box.isTouching(bullyGang)){

      var rand = Math.round(random(3,6))
      bullyGang.setVelocityXEach(rand);


    }

 */  
      bullyGang.bounceOff(edges[0]);
      bullyGang.bounceOff(edges[1]);
      bullyGang.bounceOff(edges[2]);
      bullyGang.bounceOff(edges[3]); 

      if (box.isTouching(bullyGang)) {
        pain += 1;
        box.velocityY -= 1;
        box.velocityX -= 1;
      }
console.log(pain);

    drawSprites();
}

/*function bullies(x1,y1){
  var bully = createSprite(x1,y1,30,30);
  bully.shapeColor="red";
  bully.debug= true;
  bully.setCollider("circle",0,0,200);

  bullyGang.add(bully);

} */
