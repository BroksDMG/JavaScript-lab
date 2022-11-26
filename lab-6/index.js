'use strict';
const main = document.querySelector('.main')
const ball = document.querySelector('.ball');
const startButton =document.querySelector('.start_button');
window.addEventListener('deviceorientation', changePosition);
let speedX=0, speedY=0;
let result
let counter=0;
let holesarr=[];
let boardBounds;    
let ballBounds;
let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"));       //ball position from top and left
let ballleft =parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
let gameStart=false;

function changePosition(e){  // ball speed
    speedX=e.gamma/5
    speedY=e.beta/5
}
function onDeviceMove() {       //moving ball
    boardBounds=main.getBoundingClientRect();       // borders of board and ball
    ballBounds=ball.getBoundingClientRect();
    if(ballBounds.top+speedX>boardBounds.top&&ballBounds.bottom+speedX<boardBounds.bottom){   //limits for the ball
        ballTop+=speedX;
        ball.style.top=ballTop+'px';
    }
    if(ballBounds.left+speedY>boardBounds.left&&ballBounds.right+speedY<boardBounds.right){
        ballleft+=speedY;
        ball.style.left=ballleft+'px';
    }
    createHole();



window.requestAnimationFrame(onDeviceMove)
}
onDeviceMove()
function createHole(){
    counter++;
    if(counter<=20){
    let hole = document.createElement("canvas");   
    hole.setAttribute('class','hole');
    hole.setAttribute('id','hole'+counter);
    main.appendChild(hole);
    let curhole= document.getElementById(`hole${counter}`)
    let curholeBound=curhole.getBoundingClientRect();
    
    let randomTop =Math.floor(Math.random()*1000);
    let randomLeft =Math.floor(Math.random()*500);
    hole.style.top=randomTop+'px';
    hole.style.left=randomLeft+'px';
    
    // console.log(curhole);
    holesarr.push(counter)
}
for(let i=0; i<holesarr.length;i++){
    let current =holesarr[i];
    let currHole= document.getElementById("hole"+current);
    let currentHoleBound =currHole.getBoundingClientRect();
    ballBounds=ball.getBoundingClientRect();
    let dx =currentHoleBound.x-ballBounds.x
    let dy= currentHoleBound.y-ballBounds.y
    result=dx*dx+dy*dy;
    if(result<900){
        console.log("they touch",holesarr);
        holesarr.pop();
        currHole.remove()

    }

}
}

document.addEventListener('click',function(){
    
    startButton.classList.add('active_start');

    gameStart=true
    onDeviceMove();
})

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


