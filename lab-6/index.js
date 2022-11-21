'use strict';

const main = document.querySelector('.main')
const ball = document.querySelector('.ball');
window.addEventListener('deviceorientation', onDeviceMove)
let velocity= 1;
let intervalLeftRight;
let intervalUpDown;
let both1 =0;
let both2 =0;
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
// function moveUpLeft(){
//     let ballLeft=parseInt(window.getComputedStyle(ball).getPropertyValue("left"))
//     let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
//         ball.style.top=ballTop-velocity+"px"
//         ball.style.left=ballLeft-velocity+"px"
// }
// 
let range =10
function onDeviceMove(event) {
    
    if(event.gamma>range){
        both1++;
        intervalUpDown=setInterval(moveUp,1)

    }else if(event.gamma<(-range)){
        
        intervalUpDown=setInterval(moveDown,1)
    }else if(event.gamma>(-range)||event.gamma<range){
        clearInterval(intervalUpDown);
        console.log(both1);
        cancelAnimationFrame(onDeviceMove)
    }
    if(event.beta>range){
        intervalLeftRight=setInterval(moveRight,1)
    }else if(event.beta<(-range)){
       intervalLeftRight= setInterval(moveLeft,1)
    }else if(event.beta>(-range)||event.beta<range){
        console.log("pas2");
        clearInterval(intervalLeftRight)
    }
}
requestAnimationFrame(onDeviceMove)

// function onDeviceMoveUp(event) {
    
//     if(event.gamma>range){
//         intervalUpDown=setInterval(moveUp,1)
//         console.log("up");
//     }else if(event.gamma<(-range)){
//         intervalUpDown=setInterval(moveDown,1)
//         console.log("dow");
//     }else if(event.gamma>(-range)||event.gamma<range){
//         console.log("pas");
//         both=0;
//         clearInterval(intervalUpDown);
//     }
// }
// function onDeviceMoveLeft(event) {
//     if(event.beta>range){
//         intervalLeftRight=setInterval(moveRight,1)
//     }else if(event.beta<(-range)){
//        intervalLeftRight= setInterval(moveLeft,1)
//     }else if(event.beta>(-range)||event.beta<range){
//         console.log("pas2");
//         clearInterval(intervalLeftRight)
//     }
// }
// requestAnimationFrame(onDeviceMoveLeft)



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


    // const arows =document.addEventListener('keydown', event=>{
    //     if(both===0){
    //     both++;
    //     console.log(both);
    //     if(event.key==="ArrowLeft"){
    //         interval =setInterval(moveLeft,1)
    //     }
    //     if(event.key==="ArrowRight"){
    //         interval=setInterval(moveRight,1)
    //     }
    //     if(event.key==="ArrowUp"){
    //         interval =setInterval(moveUp,1)
    //     }
    //     if(event.key==="ArrowDown"){
    //         interval=setInterval(moveDown,1)
    //     }}
    // })
    // document.addEventListener('keyup',event=>{
    //     clearInterval(interval);
    //     both=0;
    // })