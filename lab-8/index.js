'use strict';
import Ball from "./ball.js";
const canvas =document.getElementById('canvas');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width=width;
canvas.height=height;
const ctx = canvas.getContext('2d');
const distansey=200;
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}
const balls=[];
while(balls.length<2){
    let size =random(10,25)
    let ball = new Ball(
        random(size,width-size),
        random(size,height-size),
        random(-5,5),
        random(-5,5),
        size,
        `rgb(
            ${random(0,255)},
            ${random(0,255)},
            ${random(0,255)})`);
    balls.push(ball);
}
function animation(){
    ctx.fillStyle='rgba(0,0,0,0.25)'
    ctx.fillRect(0,0,width,height)
    for(let i =0;i<balls.length;i++){
        balls[i].drawBall();
        balls[i].moveBall();
        for(let j =0;j<balls.length;j++){
            const distansex= Math.hypot(
                balls[i].x-balls[j].x,
                balls[j].y-balls[j].y);
            const twoRadius =balls[i].radius+balls[j].radius
            console.log(balls[i].radius,balls[j].radius);
            if(distansex<=distansey){
                drawLine(balls[i].x,balls[i].y,balls[j].x,balls[j].y)
            } 
        }
    }
    requestAnimationFrame(animation);
}
animation();
