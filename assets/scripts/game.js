class Vec {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Rect {
  constructor(w, h) {
    this.pos = new Vec();
    this.size = new Vec(w, h);
  }
}
class Ball extends Rect {
  constructor() {
    super(10, 10);
    this.vel = new Vec();
  }
}
