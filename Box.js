class Box{
// create a rectangular body for the Box and display it

constructor(x,y,width,height){

    var box_options ={
        restitution: 1.0
    }

    this.body = Bodies.rectangle(x,y,width,height,box_options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}

display(){
    rectMode(CENTER);
    push ()
    translate(this.body.position.x,this.body.position.y)
   rotate(this.body.angle)
    rect( 0, 0,this.width,this.height);
    pop ()
}

}