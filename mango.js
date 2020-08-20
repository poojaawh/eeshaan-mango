class Mango{
    constructor(x, y) { // removing number 50 from here as function arguments are not values
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2 
        }       // curly bracket closed here
          //  this.image = loadImage("Plucking mangoes/mango.png"); // no image is present in your project, upload them
         
        //this.body = circle(x, y, 50, options); // write 50, 50 instead of width and height
        this.body = Bodies.circle(x, y, 50, options);
        this.width = 50;
        //this.height = 50;  // circle has only radius
        
        World.add(world, this.body);
      }

      display(){
        var angle = this.body.angle; //  angle need to be defined in order to use it in rotate
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        //circle( 0, 0, this.width, this.height);
        circle( 0, 0, this.width);
        pop();
      }
}