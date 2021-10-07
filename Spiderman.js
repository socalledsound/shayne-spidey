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


    render(){
      
        image(this.images[this.imageCounter % this.numImages], this.x, this.y, this.w, this.h)
    }
}