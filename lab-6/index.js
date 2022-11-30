"use strict";
window.addEventListener("deviceorientation", changePosition);
const main = document.querySelector(".main");
const ball = document.querySelector(".ball");
const body = document.querySelector("body");
const startButton = document.querySelector(".start_button");
const holes = [];
let speedX = 0,
  speedY = 0;
let some = [];
let result;
let counter = 0;
let holesarr = [];
let score = [];
let boardBounds = main.getBoundingClientRect();
let ballBounds = ball.getBoundingClientRect();
let curhole;
let curholeBound;
let ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top")); //ball position from top and left
let ballleft = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
let gameStart = false;
function changePosition(e) {
  // ball speed
  speedX = e.gamma / 30;
  speedY = -e.beta / 30;
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Hole {
  constructor(id, x, y, velX, velY, color) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
  }
  createhole() {
    let hole = document.createElement("div");
    hole.setAttribute("class", "hole");
    hole.setAttribute("id", "hole" + this.id);
    main.appendChild(hole);
    hole.style.top = this.x + "px";
    hole.style.left = this.y + "px";
    console.log(this.id, "x:", this.x, "y:", this.y);

    hole.style.background = this.color;
    for (const hol of some) {
      if (hol === this.id) {
        hole.classList.add("black_hole"); ///creating some black holes
      }
    }
  }
  movehole() {
    boardBounds = main.getBoundingClientRect();
    curhole = document.getElementById("hole" + this.id);
    curholeBound = curhole.getBoundingClientRect();
    if (
      curholeBound.right + speedX >= boardBounds.right ||
      curholeBound.left + speedX <= boardBounds.left
    ) {
      this.velY = -this.velY;
    }
    if (
      curholeBound.bottom + speedY >= boardBounds.bottom ||
      curholeBound.top + speedY <= boardBounds.top
    ) {
      this.velX = -this.velX;
    }
    this.x += this.velX;
    this.y += this.velY;
    curhole.style.top = this.x + "px";
    curhole.style.left = this.y + "px";
  }
}
function Holes() {
  for (let i = 0; i < holes.length; i++) {
    holes[i].movehole();
  }
  for (let i = 0; i < holesarr.length; i++) {
    let current = holesarr[i];
    let currHole = document.getElementById("hole" + current);
    let currentHoleBound = currHole.getBoundingClientRect();
    ballBounds = ball.getBoundingClientRect();
    let dx = currentHoleBound.x - ballBounds.x;
    let dy = currentHoleBound.y - ballBounds.y;
    result = dx * dx + dy * dy;
    if (result < 900) {
      currHole.classList.add("hidden_hole");
      score.pop();
      console.log(score);
      if (currHole.classList.contains("black_hole")) {
        ballleft = random(ballBounds.width, boardBounds.width - ballBounds.width * 2);   //holr left/right
        ballTop = random(ballBounds.height, boardBounds.height - ballBounds.height * 2); //hole top/bottom
        ball.style.top = ballTop + "px";
        ball.style.left = ballleft + "px";
      }
    }
  }
}
function onDeviceMove() {
  //moving ball
  boardBounds = main.getBoundingClientRect(); // borders of board and ball
  ballBounds = ball.getBoundingClientRect();
  console.log("x:", ballBounds.x, "y:", ballBounds.y);
  //   console.log(boardBounds.height - ballBoundsHeight);s

  if (
    ballBounds.top + speedX > boardBounds.top &&
    ballBounds.bottom + speedX < boardBounds.bottom
  ) {
    //limits for the ball
    ballTop += speedX;
    ball.style.top = ballTop + "px";
  }
  if (
    ballBounds.left + speedY > boardBounds.left &&
    ballBounds.right + speedY < boardBounds.right
  ) {
    ballleft += speedY;
    ball.style.left = ballleft + "px";
  }
  Holes();
  // movehole();
  window.requestAnimationFrame(onDeviceMove);
}
startButton.addEventListener("click", function () {
  startButton.classList.toggle("active_start");
  if (startButton.classList.contains("active_start")) {
    gameStart = true;
    onDeviceMove();
  }
  while (holes.length < 20) {
    counter++;
    if (counter < 5) some.push(random(0, 20));
    holesarr.push(counter);
    score.push(counter);
    let hole = new Hole(
      counter, //id
      random(ballBounds.height, boardBounds.height - ballBounds.height * 2), //position y // top bottom
      random(ballBounds.width, boardBounds.width - ballBounds.width * 2), //position x //left right
      random(-1, 1), //speed x
      random(-1, 1), //speed y
      `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})` //color
    );
    hole.createhole();
    holes.push(hole);
  }
});
