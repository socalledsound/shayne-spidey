// let's start by making the canvas fill up the window
// we'll use these values in our create canvas, and elsewhere
const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

let img
let spideyAnimation1
const numImages = 10
let spidey

const numBalls = 30 
let balls

function preload(){
    img = loadImage('assets/Spiderman.png')
    // this function needs an image, a number of images to pull from it, an xOffset and yOffset   
}

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    frameRate(5)
    spideyAnimation1 = loadSpideyAnimation(img, 10, 10, 10)
    // console.log(spideyAnimation1)
    // I wrote a Spiderman class for you
    // it wants a sequence of images, a starting x and y and a width and a height
    spidey = new Spiderman(spideyAnimation1, canvasWidth/2, canvasHeight/2, canvasWidth/30, canvasWidth/15)


    balls = Array.from({length: numBalls}, () => {
        return new Ball(random(0, canvasWidth), random(0, canvasHeight), random(30,60))
      })

      health = new Health(canvasWidth/2, 50, canvasWidth/40, canvasWidth/40)

}

function draw(){
    background(30)
    health.update(spidey.remainingEnergy)    
    health.render()

    balls.forEach(ball => {
        if(!ball.collided){
            ball.checkEdges()
            ball.move()
            ball.render()
        }
    })

   
    let newBalls = balls.filter(ball => !ball.dead)
    balls = newBalls

    spidey.checkCollisions(balls)
    if(spidey.remainingEnergy > 0){
       
        spidey.update()
        spidey.render()
    }else{
        gameOver()
    }
 
}

function gameOver(){
    textSize(100)
    fill(255)
    text('GAME OVER', canvasWidth/3.5, canvasHeight/2)
}


function keyPressed(){
    console.log(key)

    if(key === 'a'){
        spidey.move({x:-10, y:0})
    }
    if(key === 'd'){
        spidey.move({x:10, y:0})
    }
    if(key === 's'){
        spidey.move({x:0, y:10})
    }
    if(key === 'w'){
        spidey.move({x:0, y:-10})
    }


    if(key === 'i'){
        spidey.slingWeb('up')
    }
    if(key === 'j'){
        spidey.slingWeb('left')
    }
    if(key === 'k'){
        spidey.slingWeb('right')
    }
    if(key === 'm'){
        spidey.slingWeb('down')
    }
}