'use strict';

const main = document.querySelector('.main')
const ball = document.querySelector('.ball');
window.addEventListener('deviceorientation', onDeviceMove)
let velocity= 1;
let interval=0;
let both =0;
function moveLeft(){
    let ballLeft=parseInt(window.getComputedStyle(ball).getPropertyValue("left"))
    // let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
        // ball.style.top=ballTop-velocity+"px"
        ball.style.left=ballLeft-velocity+"px"
}
function moveRight(){
    let ballLeft=parseInt(window.getComputedStyle(ball).getPropertyValue("left"))
    // let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
        // ball.style.top=ballTop-velocity+"px"
        ball.style.left=ballLeft+velocity+"px"
}
function moveDown(){
    // let ballLeft=parseInt(window.getComputedStyle(ball).getPropertyValue("left"))
    let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
        ball.style.top=ballTop+velocity+"px"
        // ball.style.left=ballLeft-velocity+"px"
}
function moveUp(){
    // let ballLeft=parseInt(window.getComputedStyle(ball).getPropertyValue("left"))
    let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
        ball.style.top=ballTop-velocity+"px"
        // ball.style.left=ballLeft+velocity+"px"
}
function moveUpLeft(){
    let ballLeft=parseInt(window.getComputedStyle(ball).getPropertyValue("left"))
    let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
        ball.style.top=ballTop-velocity+"px"
        ball.style.left=ballLeft-velocity+"px"
}

const arows =document.addEventListener('keydown', event=>{
    
    if(event.key==="ArrowLeft"&&event.key==="ArrowUp"){
        interval =setInterval(moveUpLeft,1)
    }
    if(both===0){
    both++;
    if(event.key==="ArrowLeft"){
        interval =setInterval(moveLeft,1)
    }
    if(event.key==="ArrowRight"){
        interval=setInterval(moveRight,1)
    }
    if(event.key==="ArrowUp"){
        interval =requestAnimationFrame(moveUp)*4
    }
    if(event.key==="ArrowDown"){
        interval=setInterval(moveDown,1)
    }
    
    
    // if(event.key==="ArrowRight"){
    //     interval=setInterval(moveRightUp,1)
    // }
    // if(event.key==="ArrowUp"){
    //     interval =setInterval(moveLeftDown,1)
    // }
    // if(event.key==="ArrowDown"){
    //     interval=setInterval(moveRightDonw,1)
    // }
    }
})
document.addEventListener('keyup',event=>{
    clearInterval(interval);
    both=0;
})
function onDeviceMove(event) {
    if(both===0){
        
    if(event.gamma>0){
        interval=setInterval(moveUp,1)
    }
    if(event.gamma<0){
        interval=setInterval(moveDown,1)
    }
    if(event.beta>0){
        interval=setInterval(moveRight,1)
    }
    if(event.beta<0){
        interval=setInterval(moveLeft,1)
    }}

    console.log(Math.floor(event.alpha));
    console.log(Math.floor(event.gamma));
    console.log(Math.floor(event.beta));
}
// function onDeviceMove(event) {
//     let leftright= event.beta/100
//     let right= leftright?true:false
//     let updonw= event.gamma
//     let up= updonw?true:false
//     let ballMove=setInterval(()=>{
//         let ballBounds=ball.getBoundingClientRect();
//         let boardBounds=main.getBoundingClientRect();
//         let ballBoundsLeft=parseInt(ballBounds.left);
//         let ballBoundsRight=parseInt(ballBounds.right);
//         let ballBoundsTop=parseInt(ballBounds.top);
//         let ballBoundsBottom=parseInt(ballBounds.bottom);
//         let ballTop=parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
//         let ballLeft=parseInt(window.getComputedStyle(ball).getPropertyValue("left"))
//         console.log(ballTop);
//         if(right&&up){
//             ball.style.top=ballTop-velocity+"px"
//             ball.style.left=ballLeft+velocity+"px"
//         }
//         if(!right&&up){
//             ball.style.top=ballTop-velocity+"px"
//             ball.style.left=ballLeft-velocity+"px"
//         }
//         if(right&&!up){
//             ball.style.top=ballTop+velocity+"px"
//             ball.style.left=ballLeft+velocity+"px"
//         }
//         if(!right&&!up){
//             ball.style.top=ballTop+velocity+"px"
//             ball.style.left=ballLeft-velocity+"px"
//         }
//         if(ballBoundsTop<=boardBounds.top){
//             leftright= event.beta/100
//             right= leftright?true:false
//             up=false;
//         }
//         if(ballBoundsBottom>=boardBounds.bottom){
//             leftright= event.beta/100
//             right= leftright?true:false
//             up=true;
//         }
//         if(ballBoundsRight>=boardBounds.right){
//             right=false
//             updonw= event.gamma/100
//             up= updonw?true:false
//         }
//         if(ballBoundsLeft<=boardBounds.left){
//             right=true
//             updonw= event.gamma/100
//             up= updonw?true:false
//         }
        
//     },10)
// }

function animate() {
    //    console.log(Date.now())
    // requestAnimationFrame(animate)
}

requestAnimationFrame(animate)