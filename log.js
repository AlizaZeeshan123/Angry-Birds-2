class Log extends Parent{
    constructor(x,y,height,angle){
        super(x,y,20,height)
        this.image = loadImage("sprites-main/wood2.png")
        Matter.Body.setAngle(this.body,angle)
    }
}