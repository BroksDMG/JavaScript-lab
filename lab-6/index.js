"use strict";
window.addEventListener("deviceorientation", changePosition);
const main = document.querySelector(".main");
const ball = document.querySelector(".ball");
const body = document.querySelector("body");
const startButton = document.querySelector(".start_button");
const holes = [];
let speedX = 0,speedY = 0;
let someBlackHoles = [];
let counter = 0;
let holesarr = [];
let score =0;
let boardBounds = main.getBoundingClientRect();
let ballBounds = ball.getBoundingClientRect();
let curhole;
let curholeBound;
let ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top")); //ball position from top and left
let ballleft = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
let gameStart = false;
let startTime
let endTime
let gameEnd=false;
let scoreArr=[];
function changePosition(e) {        // ball speed
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
    hole.style.boxShadow= `0 0 10px 5px ${this.color}`
    hole.style.background = this.color;
    for (const hol of someBlackHoles) {
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
      curholeBound.right + speedX*2 >= boardBounds.right ||
      curholeBound.left + speedX*2 <= boardBounds.left
    ) {
      this.velY = -this.velY;
    }
    if (
      curholeBound.bottom + speedY*2 >= boardBounds.bottom ||
      curholeBound.top + speedY*2 <= boardBounds.top
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
    
    
    ballBounds = ball.getBoundingClientRect();
    let current = holesarr[i];
    let currHole = document.getElementById("hole" + current);
    let currentHoleBound = currHole.getBoundingClientRect();
    let ballR=ballBounds.right-ballBounds.x
    let holeR=currentHoleBound.right-currentHoleBound.x
    let dx = currentHoleBound.x - ballBounds.x;
    let dy = currentHoleBound.y - ballBounds.y;
    let distanse = dx * dx + dy * dy;
    let sumOfRays=ballR*ballR+holeR*holeR
    if (distanse < sumOfRays) {
      currHole.classList.add("hidden");
      score++;
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
  moveBall()
  Holes();
  if(!(score>2)){
  window.requestAnimationFrame(onDeviceMove);
  }else
  {
    endTime=new Date().getTime();
    console.log(endTime-startTime);
  }
}
startButton.addEventListener("click", function () {     ///start game
  startButton.classList.toggle("active_start");
  if (startButton.classList.contains("active_start")) {
    gameStart = true;
    onDeviceMove();
    startTime= new Date().getTime();
    console.log(startTime)
  }
  createHoles();
});
function moveBall(){
    //moving ball
  boardBounds = main.getBoundingClientRect(); // borders of board and ball
  ballBounds = ball.getBoundingClientRect();

  if (
    ballBounds.top + speedX > boardBounds.top &&        //limits for the ball
    ballBounds.bottom + speedX < boardBounds.bottom
  ) {
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
}
function createHoles(){
    while (holes.length < 20) {
        counter++;
        if (counter < 5) someBlackHoles.push(random(0, 20));
        holesarr.push(counter);
        let hole = new Hole(
          counter, //id
          random(ballBounds.height, boardBounds.height - ballBounds.height * 2), //position y // top bottom
          random(ballBounds.width, boardBounds.width - ballBounds.width * 2), //position x //left right
          random(-1, 1), //speed x
          random(-1, 1), //speed y
          `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`, //color
        );
        hole.createhole();
        holes.push(hole);
      }    
    }