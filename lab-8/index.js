'use strict';
import Ball from "./ball.js";
const canvas =document.querySelector('canvas');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width=width;
canvas.height=height;
const ctx = canvas.getContext('2d');
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const balls=[];
while(balls.length<25){
    let size =random(10,25)
    let ball = new Ball(
        random(size,width-size),
        random(size,height-size),
        5,
        5,
        20,
        'rgb(0,255,0)');
    balls.push(ball);
}

function animation(){
    ctx.fillStyle='rgba(0,0,0,0.25'
    ctx.fillRect(0,0,width,height)
    for(let i =0;i<balls.length;i++){
        balls[i].drawBall();
        balls[i].moveBall();
    }
    requestAnimationFrame(animation);
}
animation();