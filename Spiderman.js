class Spiderman{
    constructor(imgs, x, y, w, h){
        this.images = imgs
        this.numImages = imgs.length
        this.imageCounter = 0
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.remainingEnergy = 5
    }

    animate(){
        this.imageCounter++
    }

    checkCollisions(balls){
        balls.forEach(ball => {
            // this would be a good place to compare 
            // the spiderman's x and y to each ball's x and y
        })
    }


    render(){
      
        image(this.images[this.imageCounter % this.numImages], this.x, this.y, this.w, this.h)
    }
}