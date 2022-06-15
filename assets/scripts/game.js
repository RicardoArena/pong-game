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
  get left() {
    return this.pos.x - this.size.x / 2;
  }
  get right() {
    return this.pos.x + this.size.x / 2;
  }
  get top() {
    return this.pos.y - this.size.y / 2;
  }
  get bottom() {
    return this.pos.y + this.size.y / 2;
  }
}
class Ball extends Rectangle {
  constructor() {
    super(10, 10);
    this.vel = new Vector();
  }
}

class Player extends Rectangle {
  constructor() {
    super(20, 100);
    this.score = 0
  }

}


class Pong {
  constructor(canvas) {
    this._canvas = canvas;
    this._context = canvas.getContext("2d");
    this.ball = new Ball();
    this.ball.pos.x = 180;
    this.ball.pos.y = 100;

    this.ball.vel.x = 100;
    this.ball.vel.y = 100;
this.players = [new Player, new Player ];

this.players[0].pos.x = 40
this.players[1].pos.x = this._canvas.width - 40;
this,players.forEach(player =>{player.pos.y} )

    let lastTime;
   const callback (millis) => {
      if (lastTime) {
        this.update((millis - lastTime) / 1000);
      }
      lastTime = millis;
      requestAnimationFrame(callback);
    }
    callback(); 
  }
  draw() {
    this._context.fillStyle = "#000";
    this._context.fillRect(0, 0, this._canvas.width, this._canvas.heigth);

    this.drawRect(this.ball) 
    this.players.forEach(player => this.drawRect(player));
  }
  drawRect(rect) {

    this._context.fillStyle = "#fff";
    this._context.fillRect(
      rect.ball.pos.x,
      rect.ball.pos.y,
      rect.ball.size.x,
      rect.ball.size.y
    );

  }
  update(dt) {
    this.ball.pos.x += this.ball.vel.x * dt;
    this.ball.pos.y += this.ball.vel.x * dt;

    if (this.ball.left < 0 || this.ball.right > this._canvas.width) {
      this.ball.vel.x = -this.ball.vel.x;
    }
    if (this.ball.top < 0 || this.ball.bottom > this._canvas.heigth) {
      this.ball.vel.y = -this.ball.vel.y;
    }
    this.draw();

          }
}

const canvas = document.getElementById("pong");
const pong = new Pong(canvas)
