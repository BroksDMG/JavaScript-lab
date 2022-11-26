'use strict';
const main = document.querySelector('.main')
const ball = document.querySelector('.ball');
const board =document.querySelector('.board')
const ctx = board.getContext=


window.addEventListener('deviceorientation', changePosition);
const circle =document.getElementById('circle');
let speedX=0, speedY=0;
let posX=500,posY=300;
let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"));

// function moveLeft(){ 
//     let ballLeft=parseInt(window.getComputedStyle(ball).getPropertyValue("left"))
//     let boardBounds=main.getBoundingClientRect();
//     let ballBounds=ball.getBoundingClientRect();
//     // if(!(ballBounds.left<=boardBounds.left))
//     // {   
//     //     posY+=speedY
//     //     ball.style.left=posX+'px';
//     // }
//     //ball.style.left=ballLeft-velocity+"px"
// }
// function moveRight(){
//     let ballLeft=parseInt(window.getComputedStyle(ball).getPropertyValue("left"))
//     let boardBounds=main.getBoundingClientRect();
//     let ballBounds=ball.getBoundingClientRect();
//     if(!(ballBounds.right>=boardBounds.right))ball.style.left=ballLeft+velocity+"px"
// }
// function moveDown(){
//     let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
//     let boardBounds=main.getBoundingClientRect();
//     let ballBounds=ball.getBoundingClientRect();
//     if(!(ballBounds.bottom>=boardBounds.bottom)) ball.style.top=ballTop+velocity+"px"
// }
// function moveUp(){
//     let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
//     let boardBounds=main.getBoundingClientRect();
//     let ballBounds=ball.getBoundingClientRect();
//     // if(!(ballBounds.top<=boardBounds.top)) {
//     //     posX+=speedX;
//     //     ball.style.top=posX+'px';
//     // }
    
//     // ball.style.top=ballTop-velocity+"px"
    

// }
let range =5
function changePosition(e){
    speedX=e.gamma/5
    speedY=e.beta/5
}
function onDeviceMove() {
    
    let ballLeft=parseInt(window.getComputedStyle(ball).getPropertyValue("left"))
    let boardLeft=parseInt(window.getComputedStyle(main).getPropertyValue("top"))

    let boardBounds=main.getBoundingClientRect();
    let ballBounds=ball.getBoundingClientRect();

    if(ballBounds.top+speedX>boardBounds.top&&ballBounds.bottom+speedX<boardBounds.bottom){
        ballTop+=speedX;
        ball.style.top=ballTop+'px';
    }
    if(ballBounds.left+speedY>boardBounds.left&&ballBounds.right+speedY<boardBounds.right){
        posY+=speedY;
        ball.style.left=posY+'px';
    }
//     let step=2;
//     let x1=0;
//     let x2=0;
//     let y1=0;
//     let y2=0;
//     setInterval(()=> step=-step,300)
//     const animation =()=>{  
    // if(event.gamma>range){
    //     posX+=speedX;
    //     ball.style.left=posX+'px';
    //     // both1=1 
    // }
    // if(event.gamma<(-range)){
    //     posX+=speedX;
    //     ball.style.left=posX+'px';

    // }
//     if(event.gamma>(-range)&&event.gamma<range){
//         x1=1;
//         cancelAnimationFrame(animation);
//         console.log(x1);
//     }}
//     window.requestAnimationFrame(animation)
//  const animation2 =()=>{

//     if(event.beta>range){
//         moveRight()
//     }
//     if(event.beta<(-range)){
//        moveLeft()
//     }
//     if(event.beta>(-range)&&event.beta<range){
//        cancelAnimationFrame(animation);
//     }}
//     window.requestAnimationFrame(animation2)
// console.log(speedX,ballTop);
 
window.requestAnimationFrame(onDeviceMove)
// console.log(boardBounds);
// console.log(posX+speedX);
// console.log(ballBounds.top);

}
onDeviceMove();




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