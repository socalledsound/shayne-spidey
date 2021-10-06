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
        return new Ball(random(0, canvasWidth), random(0, canvasHeight), random(10,20))
      })

}

function draw(){
    background(30)
    
    balls.forEach(ball => {
        ball.move()
        ball.render()
    })
    
    spidey.animate()
     spidey.render()


    
}