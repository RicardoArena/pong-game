class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
class Rectangle {
  constructor(w, h) {
    this.pos = new Vector();
    this.size = new Vector(w, h);
  }
}
class Ball extends Rectangle {
  constructor() {
    super(10, 10);
    this.vel = new Vector();
  }
}
const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

const ball = new Ball();
// ball.pos.x = 180;
// ball.pos.y = 100;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.heigth);

ctx.fillStyle = "#fff";
ctx.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
