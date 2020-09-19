var bg;
var player1,player2,plrImg1,plrImg2
var ball,ballImg;
player2.setCollider("Rectangle",0,0,100,100)


function preload()
{
bg = loadImage("Images/Field.jpg")
plrImg1 = loadImage("Images/football1.png")
plrImg2 = loadImage("Images/football2.png")
ballImg = loadImage("Images/Football.png")
}

function setup() 
{
  
  createCanvas(displayWidth - 25,displayHeight - 25);

  
  player1 = createSprite(250,500)
  player1.addImage(plrImg1)
  player1.scale = 0.255
  player1.debug = true

  player2 = createSprite(1600,550,100,100)
  player2.addImage(plrImg2)
  player2.scale = 0.25
  player2.debug = true
  

  ball = createSprite(displayWidth/2 - 20,displayHeight/2 - 25)
  ball.addImage(ballImg)
  ball.scale = 0.25

  edges = createEdgeSprites();
  
  
  
}

function draw() 
{
  background(bg)
  if(keyDown(UP_ARROW)){
    player1.velocityY = -3
  }
  if(keyDown(DOWN_ARROW)){
    player1.velocityY = 3
  }
  if(keyDown(LEFT_ARROW)){
    player1.velocityX = -3
  }
  if(keyDown(RIGHT_ARROW)){
    player1.velocityX = 3
  }

  if(keyDown("w")){
    player2.velocityY = -3
  }
  if(keyDown("s")){
    player2.velocityY = 3
  }
  if(keyDown("a")){
    player2.velocityX = -3
  }
  if(keyDown("d")){
    player2.velocityX = 3
  }


  edges = createEdgeSprites();
  player1.bounceOff(edges[0])
  player1.bounceOff(edges[1])
  player1.bounceOff(edges[2])
  player1.bounceOff(edges[3])
  player1.bounce(player2)
  player1.debug = true
  
  player2.bounceOff(edges[0])
  player2.bounceOff(edges[1])
  player2.bounceOff(edges[2])
  player2.bounceOff(edges[3])
  
  drawSprites();
  
  
}

