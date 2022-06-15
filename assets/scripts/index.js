const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

const ball = new Ball();
ball.pos.x = 100;
ball.pos.y = 50;

ball.vel.x = 100;
ball.vel.y = 100;

let lastTime;
function callback(millis) {
  if (lastTime) {
    update((millis - lastTime) / 1000);
  }
  lastTime = millis;
  requestAnimationFrame(callback);
}

function update(dt) {
  ball.pos.x += ball.vel.x * dt;
  ball.pos.y += ball.vel.y * dt;

  if (ball.pos.x < 0 || ball.pos.x > canvas.width) {
    ball.vel.x = -ball.vel.x;
  }
  if (ball.pos.y < 0 || ball.pos.y > canvas.height) {
    ball.vel.y = -ball.vel.y;
  }

  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#fff";
  context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
}
callback();
