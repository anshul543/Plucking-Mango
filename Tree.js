class Tree{
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.image = loadImage("images/Tree.png");

        this.a = Bodies.rectangle(this.x, this.y, 450, 10, {isStatic : true});

        this.b = Bodies.rectangle(0, this.y - 300, 10, 600, {isStatic : false});

        this.c = Bodies.rectangle(this.x + 225, this.y - 300, 10, 600, {isStatic : false});

        World.add(world, this.a);
        World.add(world, this.b);
        World.add(world, this.c);
    }
    display(){
        var pos = this.a.position;

        push();
        translate(pos.x, pos.y + 10);
        fill(255);
        imageMode(CENTER);
        image (this.image, 0, -300, 450, 600);
        pop();
    }
}