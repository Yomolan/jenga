class Ladrillo {
  constructor(x, y, w,h) {
    /*let options = {
     isStatic:true
    };*/
    
    this.body = Bodies.rectangle(x, y, w, h);
    this.w = w;
    this.h = h;
  
    this.ladrillo_img = loadImage('brick.png');
    World.add(world, this.body);
  }

  show() {
     let pos = this.body.position;
     push();
     translate(pos.x, pos.y);
     imageMode(CENTER);
     noStroke();
     fill(148,127,146);
     image(this.ladrillo_img,pos.x,pos.y, this.w, this.h);
     pop();
  }
}
