var astroid
var astroidImg
var astroid2
var astroid3
var astroid4
var ship
var shipImg
var spaceImg
var edges

function  preload() {
astroidImg = loadImage('astroid.png')  
shipImg = loadImage('spacecraft.png')  
spaceImg = loadImage('space.jpg')
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    ship = createSprite(windowWidth/2,windowHeight/2,40,40)
    ship.addImage(shipImg)
    ship.scale = 0.5

    astroid = createSprite(windowWidth/3,windowHeight/2,60,60)
    astroid.addImage(astroidImg)
    astroid.scale = 0.2

    astroid2 = createSprite(windowWidth/3, windowHeight/4,60,60)
    astroid2.addImage(astroidImg)
    astroid2.scale = 0.2

    astroid3 = createSprite(windowWidth/2,windowHeight/5,60,60)
    astroid3.addImage(astroidImg)
    astroid3.scale = 0.2

    astroid4 = createSprite(windowWidth/6,windowHeight/4,60,60)
    astroid4.addImage(astroidImg)
    astroid4.scale = 0.2

  
}

function draw(){
    background(spaceImg)
drawSprites()
    astroid.velocityX = 6
    astroid.velocityY = 4
    astroid2.velocityX = 6
    astroid2.velocityY = 4
    astroid3.velocityX = 6
    astroid3.velocityY = 4
    astroid4.velocityX = 6
    astroid4.VelocityY = 4

    edges = createEdgeSprites()

    astroid.bounceOff(edges)
    astroid2.bounceOff(edges)
    astroid3.bounceOff(edges)   
    astroid4.bounceOff(edges)

    if(keyCode === 38){
        ship.velocityX = -4
    }
    if (keyCode === 40){
        ship.velocityX = 4
    }
    if(keyCode === 39){
        ship.velocityY = 4
    }
    if(keyCode === 37){
        ship.velocityY = -4
    }
    else{
        velocityX = 0
        velocityX = 0
    }
    if(ship.isTouching(astroid)){
        ship.x = windowWidth/2
        ship.x = windowHeight/2
    }
}