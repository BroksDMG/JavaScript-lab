'use strict';
import Ball from "./ball.js";
const canvas =document.getElementById('canvas');
const start =document.querySelector('.start');
const restart =document.querySelector('.restart');
const ballslider =document.getElementById('ballRange');
const lineSlider = document.getElementById('lineRange');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width=width;
canvas.height=height;
let numberOfballs;
let balls;
const ctx = canvas.getContext('2d');
let distansey;
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}
;
function createBall(){
    while(balls.length<numberOfballs){
        let size =random(10,15)
        let ball = new Ball(
            random(size,width-size),
            random(size,height-size),
            random(-2,1),
            random(-2,1),
            size,
            `rgb(
                ${random(0,255)},
                ${random(0,255)},
                ${random(0,255)})`);
        balls.push(ball);
    }
}

function animation(){

    ctx.fillStyle='rgba(230,230,250)'
    ctx.fillRect(0,0,width,height)
    for(let i =0;i<balls.length;i++){
        balls[i].drawBall();
        balls[i].moveBall();
        for(let j =0;j<balls.length;j++){
            const distansex= Math.hypot(
                balls[i].x-balls[j].x,
                balls[i].y-balls[j].y);
            if(distansex<=distansey){
                drawLine(balls[i].x,balls[i].y,balls[j].x,balls[j].y)
            } 
        }
    }
    requestAnimationFrame(animation);
}
function endAnimation(){
      balls=[]
      numberOfballs=0;
      distansey=0;
}
start.addEventListener('click',function(){
    balls=[];
    numberOfballs=ballslider.value
    distansey=height*lineSlider.value/100;
    
    animation();
    console.log(numberOfballs);
    console.log(distansey);
    createBall();
})
restart.addEventListener('click',function(){
    endAnimation();
    numberOfballs=ballslider.value
    distansey=height*lineSlider.value/100;
    
    animation();
    console.log(numberOfballs);
    console.log(distansey);
    createBall()
})