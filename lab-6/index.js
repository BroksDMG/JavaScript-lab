'use strict';
window.addEventListener('deviceorientation', changePosition);
const main = document.querySelector('.main')
const ball = document.querySelector('.ball');
const startButton =document.querySelector('.start_button');
const holes=[]
let speedX=0, speedY=0;
let some=[];
let result
let counter=0;
let holesarr=[];
let score=[]
let boardBounds;    
let ballBounds;
let curhole
let curholeBound
let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"));       //ball position from top and left
let ballleft =parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
let gameStart=false;

function changePosition(e){  // ball speed
    speedX=e.gamma/5
    speedY=e.beta/5
}
function random(min,max){
    const num =Math.floor(Math.random()*(max-min+1))+min;
    return num;
}
class Hole{
    constructor(id,x,y,velX,velY,color,){
        this.id=id
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;
        this.color=color;
    }
    createhole(){
    let hole = document.createElement("div");   
    hole.setAttribute('class','hole');
    hole.setAttribute('id','hole'+this.id);
    main.appendChild(hole);
    hole.style.top=this.x+'px';
    hole.style.left=this.y+'px';
    hole.style.background=this.color;
        for(const hol of some){                     ///creating some black holes
            if(hol===this.id){
                console.log(this.id,"równe");
                hole.classList.add('black_hole')
            }
        }
    }
    movehole(){
        boardBounds=main.getBoundingClientRect(); 
        curhole= document.getElementById("hole"+this.id)
        curholeBound=curhole.getBoundingClientRect();
        if(curholeBound.right+speedX>=boardBounds.right||curholeBound.left+speedX<=boardBounds.left){
            this.velY=-this.velY
        }
        if(curholeBound.bottom+speedY>=boardBounds.bottom||curholeBound.top+speedY<=boardBounds.top){
            this.velX=-this.velX
        }
        this.x+=this.velX;
        this.y+=this.velY;
        curhole.style.top=this.x+'px';
        curhole.style.left=this.y+'px';
    }
}
function Holes(){
    for(let i=0; i<holes.length;i++){
        holes[i].movehole();
        
    }
    for(let i=0; i<holesarr.length;i++){
        console.log(some);
        let current =holesarr[i];
        let currHole= document.getElementById("hole"+current);
        let currentHoleBound =currHole.getBoundingClientRect();
        ballBounds=ball.getBoundingClientRect();
        let dx =currentHoleBound.x-ballBounds.x
        let dy= currentHoleBound.y-ballBounds.y
        result=dx*dx+dy*dy;
        if(result<900){
            currHole.classList.add('hidden_hole');
            score.pop();
            console.log(score);
            if(currHole.classList.contains('black_hole')){
                console.log("blackhole");
                ballleft=400
                ballTop=200
                ball.style.top=ballTop+'px';
                ball.style.left=ballleft+'px';
            }
        }
        
    }
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
    Holes();
    // movehole();
window.requestAnimationFrame(onDeviceMove)
}
document.addEventListener('click',function(){
    startButton.classList.toggle('active_start');
    if(startButton.classList.contains('active_start')){
    gameStart=true
    onDeviceMove();
    }
    while(holes.length<20){
        counter++;
        if(counter<5)some.push(random(0,20))
        holesarr.push(counter)
        score.push(counter)
        let hole=new Hole(
            counter,                //id
            random(30,700),         //position x
            random(30,400),         //position y
            random(0,1),            //speed x
            random(0,1),            //speed y
            `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`, //color
            )
        hole.createhole()
        holes.push(hole);
        }
})

