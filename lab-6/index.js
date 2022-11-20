'use strict';

const main = document.querySelector('.main')
const ball = document.querySelector('.ball');
window.addEventListener('deviceorientation', onDeviceMove)

function onDeviceMove(event) {
    let leftright= event.beta/100
    let right= leftright?true:false
    let updonw= event.gamma/100
    let up= updonw?true:false
    let velocity= 1;
    let ballMove=setInterval(()=>{
        let ballBounds=ball.getBoundingClientRect();
        let boardBounds=main.getBoundingClientRect();
        let ballBoundsLeft=parseInt(ballBounds.left);
        let ballBoundsRight=parseInt(ballBounds.right);
        let ballBoundsTop=parseInt(ballBounds.top);
        let ballBoundsBottom=parseInt(ballBounds.bottom);
        let ballTop=Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue("top")))
        let ballLeft=Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue("left")))
        if(right&&up){
            ball.style.top=ballTop-velocity+"px"
            ball.style.left=ballLeft+velocity+"px"
        }
        if(!right&&up){
            ball.style.top=ballTop-velocity+"px"
            ball.style.left=ballLeft-velocity+"px"
        }
        if(right&&!up){
            ball.style.top=ballTop+velocity+"px"
            ball.style.left=ballLeft+velocity+"px"
        }
        if(!right&&!up){
            ball.style.top=ballTop+velocity+"px"
            ball.style.left=ballLeft-velocity+"px"
        }
        if(ballBoundsTop<=boardBounds.top){
            leftright= event.beta/100
            right= leftright?true:false
            up=false;
        }
        if(ballBoundsBottom>=boardBounds.bottom){
            leftright= event.beta/100
            right= leftright?true:false
            up=true;
        }
        if(ballBoundsRight>=boardBounds.right){
            right=false
            updonw= event.gamma/100
            up= updonw?true:false
        }
        if(ballBoundsLeft<=boardBounds.left){
            right=true
            updonw= event.gamma/100
            up= updonw?true:false
        }
        
    })
}

function animate() {
    //    console.log(Date.now())
    // requestAnimationFrame(animate)
}

requestAnimationFrame(animate)