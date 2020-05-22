class box{
    constructor(x,y){
        this.body = {
            var:leftrectangle = createSprite(width / 2,380,200,20),
	        var:bottomrectangle = createSprite(300,330,20,100),
	        var:rightrectangle = createSprite(500,330,20,100)

        }
        World.add(world, this.body);

        

    }
    display(){
        dustbin.loadImage("dustbin.png");
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y);
    }
    
    
}