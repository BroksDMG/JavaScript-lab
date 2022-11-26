'use strict';
const main = document.querySelector('.main')
const ball = document.querySelector('.ball');
window.addEventListener('deviceorientation', changePosition);
let speedX=0, speedY=0;
let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"));       //ball position from top and left
let ballleft =parseInt(window.getComputedStyle(ball).getPropertyValue("left"));

function changePosition(e){  // ball speed
    speedX=e.gamma/5
    speedY=e.beta/5
}
function onDeviceMove() {       //moving ball
    let boardBounds=main.getBoundingClientRect();       // borders of board and ball
    let ballBounds=ball.getBoundingClientRect();
    if(ballBounds.top+speedX>boardBounds.top&&ballBounds.bottom+speedX<boardBounds.bottom){   //limits for the ball
        ballTop+=speedX;
        ball.style.top=ballTop+'px';
    }
    if(ballBounds.left+speedY>boardBounds.left&&ballBounds.right+speedY<boardBounds.right){
        ballleft+=speedY;
        ball.style.left=ballleft+'px';
    }
window.requestAnimationFrame(onDeviceMove)
}
onDeviceMove();




