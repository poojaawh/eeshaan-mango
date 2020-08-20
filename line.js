class Line {
    constructor(bodyA, bodyB ){
       var options= {
           bodyA: bodyA,
    bodyB : bodyB,
    length: 10,
    stiffness : 0.09
       }
        this.line = Constraint.create(options);
    World.add(world, this.line)
    }
    display(){
        var pointA = this.line.bodyA.position
        var pointB = this.Line.bodyB.position
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        
    }
    }