class Ball{
    constructor(x, y, size){
      this.x = x
      this.y = y
      this.size = size
      this.color = [225, 0, 0]
      this.speedX = random(-3,3)
      this.speedY = random(-3,3)
    }
    
    move(){
        this.x+=this.speedX
        this.y+=this.speedY
    }

   render(){
     console.log(this.x, this.y, this.size)
     fill(this.color)
     circle(this.x, this.y, this.size)
   } 

   
  }