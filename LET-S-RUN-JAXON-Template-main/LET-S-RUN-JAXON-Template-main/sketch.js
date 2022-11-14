var p,play,road,roodim,cash,monet,sand,cash1,monet1,cash2,monet2,meer;
var score,Play,End,game;

var gameu,over

function preload()
{
  play = loadAnimation("Runner-1.png","Runner-2.png")
  roodim = loadImage("Road.png")
  monet = loadImage("cash.png")
  monet1 = loadImage("diamonds.png")
  monet2 = loadImage("sword.png")
  over = loadImage("gameOver.png")
  score = 0;
  Play = 1;
  End = 0;
  game = Play;

}

function setup()
{
  createCanvas(400,600);
  road = createSprite(200,-999999999999967777777777777777777777777777788888888888);
  p = createSprite(200,-88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888)
  cash = createSprite(200,-999999999999967777777777777777777777777777788888888888);
  cash.setCollider("circle",0,0,500)  
  cash.debug = false;
  p.setCollider("circle",0,0,50)
  p.debug = false;
  meer = new Group();
}

function draw() 
{
  background("white")
  if(game == Play)
  {
    road.y = road.y + 7;
    cash.y = road.y + 7;
    if(keyDown("right"))
    {
      p.x = p.x + 4;
    }
    if(keyDown("left"))
    {
      p.x = p.x - 4;
    }
    if(p.isTouching(meer))
    {
      score = score + 1;
      cash.destroy()
    }
    if(score == 130)
    {
      game = End;
    }
    roadm();
    rans();
  }
  if(game == End)
  {
    road.y = road.y + 0;
    cash.y = road.y + 0;
    gameu = createSprite(200,200)
    gameu.addAnimation("jhgfyjyg hhhhhhhm",over)
  }
  drawSprites()
  text("Objects found" + score, 200,100,600,300)
  text("score should be 130 and then game will be over",50,300,600,300)
}

function rans()
{ if(frameCount%60==0)
  {
    cash = createSprite(50,300)
    cash.x = Math.round(random(50,400))
    cash.y = Math.round(random(50,350))
    sand = Math.round(random(1,3))
    cash.setCollider("circle",0,0,500)  
    cash.debug = false;
    cash.scale = 0.1
    switch(sand)
    {
      case 1 : cash.addImage(monet)
      break
      case 2 : cash.addImage(monet1)
      break 
      case 3 : cash.addImage(monet2)
      break
      default:
        break
    }
    meer.add(cash);
  }
}
function roadm()
{
  if(frameCount%60==0)
  {
    road = createSprite(200,200);
    road.addImage(roodim);
    p = createSprite(200,550)
    p.addAnimation("run",play)
    p.setCollider("circle",0,0,50)
    p.debug = false;
    p.scale = 0.1
  }
}