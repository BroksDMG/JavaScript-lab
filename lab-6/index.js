"use strict";
window.addEventListener("deviceorientation", changePosition);
const main = document.querySelector(".main");
const ball = document.querySelector(".ball");
const body = document.querySelector("body");
const timeConteiner =document.querySelector(".time_conteiner")
const restarConteiner =document.querySelector(".restart_conteiner")
const timeText=document.querySelector(".time_text")
const minutes =document.querySelector(".time_minutes");
const seconds =document.querySelector(".time_seconds");
const startButton = document.querySelector(".start_button");
const restartButton =document.querySelector(".restart_button")
restartButton.addEventListener("click",restar)
let holes = [];
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
let ballquantity=20;
let resSec =0,resMin=0;
let currentHoleBound;
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
    if(!(curhole===null)){
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
}
function Holes() {
  for (let i = 0; i < holes.length; i++) {
    holes[i].movehole();
  }
  for (let i = 0; i < holesarr.length; i++) {
    ballBounds = ball.getBoundingClientRect();
    let current = holesarr[i];
    let currHole = document.getElementById("hole" + current);
    if(!(currHole===null)){
        currentHoleBound = currHole.getBoundingClientRect();
    
    let ballR=ballBounds.right-ballBounds.x
    let holeR=currentHoleBound.right-currentHoleBound.x
    let dx = currentHoleBound.x - ballBounds.x;
    let dy = currentHoleBound.y - ballBounds.y;
    let distanse = dx * dx + dy * dy;
    let sumOfRays=ballR*ballR+holeR*holeR
    if (distanse < sumOfRays) {
      currHole.classList.add("hidden");
      score++;
      if (currHole.classList.contains("black_hole")) {
        ballleft = random(ballBounds.width, boardBounds.width - ballBounds.width * 2);   //holr left/right
        ballTop = random(ballBounds.height, boardBounds.height - ballBounds.height * 2); //hole top/bottom
        ball.style.top = ballTop + "px";
        ball.style.left = ballleft + "px";
      }
      
    }
    }
    
  }
}
function Animation() {
  moveBall()
  Holes();
  if(!(score>=ballquantity)){
  window.requestAnimationFrame(Animation);
  }else
  {
    endGame();
  }
}
function endGame(){
    timeConteiner.classList.remove("hidden");
    restarConteiner.classList.remove("hidden");
    timeText.classList.remove("hidden");
    ball.classList.add("hidden");
    time()
    counter=0;
    score=0;
    speedX=0;
    speedY=0;
    for (let i = 1; i < holes.length+1; i++) {
        document.getElementById("hole"+i).remove()
      }
      holes=[];
    ball.style.top=50+"%"
    ball.style.left=50+"%";
}
function restar(){
    timeConteiner.classList.add("hidden");
    restarConteiner.classList.add("hidden");
    timeText.classList.add("hidden");  
    startButton.classList.remove("active_start")
    ball.classList.remove("hidden");
    // startTime= new Date().getTime();
    // Animation();
    // createHoles();
}
function time(){
    endTime=new Date().getTime();
    let second =Math.floor(((endTime-startTime)/1000)-resSec);
    let minute=Math.floor(((endTime-startTime)/60000)-resMin);
    if(second>=60)resSec+=60
    if(minute>=60)resMin+=60
    seconds.textContent=second.toString().padStart(2,"0")+"s";
    minutes.textContent=minute.toString().padStart(2,"0");
}
startButton.addEventListener("click", start);
function start() {     ///start game button
    if(!(startButton.classList.contains("active_start"))){
      startButton.classList.add("active_start");
    }
    if (startButton.classList.contains("active_start")) {
      ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top")); //ball position from top and left
      ballleft = parseInt(window.getComputedStyle(ball).getPropertyValue("left"))
      gameStart = true;
      createHoles();
      Animation();
      startTime= new Date().getTime();
    }
  }
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
    while (holes.length < ballquantity) {
        counter++;
        if (counter < 5) someBlackHoles.push(random(0, ballquantity));
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