'use strict';
const main = document.querySelector('.main')
const ball = document.querySelector('.ball');
window.addEventListener('deviceorientation', changePosition)
let velocity= 1;
let intervalLeftRight;
let intervalUpDown;
let both1 =0;
let both2 =0;
let rotationRight=0;
let rotationLeft=0;
let leftright =false
let right = leftright?true:false
let updown =false
let up = leftright?true:false
let speedX=0, speedY=0;
let posX=20,posY=20
function moveLeft(){ 
    let ballLeft=parseInt(window.getComputedStyle(ball).getPropertyValue("left"))
    let boardBounds=main.getBoundingClientRect();
    let ballBounds=ball.getBoundingClientRect();
    if(!(ballBounds.left<=boardBounds.left))
    {   
        posY+=speedY
        ball.style.left=posX+'px';
    }
    //ball.style.left=ballLeft-velocity+"px"
}
function moveRight(){
    let ballLeft=parseInt(window.getComputedStyle(ball).getPropertyValue("left"))
    let boardBounds=main.getBoundingClientRect();
    let ballBounds=ball.getBoundingClientRect();
    if(!(ballBounds.right>=boardBounds.right))ball.style.left=ballLeft+velocity+"px"
}
function moveDown(){
    let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
    let boardBounds=main.getBoundingClientRect();
    let ballBounds=ball.getBoundingClientRect();
    if(!(ballBounds.bottom>=boardBounds.bottom)) ball.style.top=ballTop+velocity+"px"
}
function moveUp(){
    let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
    let boardBounds=main.getBoundingClientRect();
    let ballBounds=ball.getBoundingClientRect();
    if(!(ballBounds.top<=boardBounds.top)) {
        posX+=speedX;
        ball.style.top=posX+'px';
    }
    
    // ball.style.top=ballTop-velocity+"px"
    

}
let range =5
function changePosition(e){
    speedX=e.gamma30
    speedY=e.beta/30
}
function onDeviceMove() {
    moveLeft()
    moveDown()
    // if(posX+speedX<window.innerWidth-50&&posX+posX>0){
    //     posX+=speedX;
    //     ball.style.left=posX+'px';
    //     // both1=1 
    // }
    // if(posX+speedX<window.innerHeight-50&&posX+posX>0){
    //     posY+=speedY;
    //     ball.style.top=posX+'px';

    // }
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
 
window.requestAnimationFrame(moveDown)
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