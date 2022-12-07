const canvas =document.querySelector('canvas');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width=width;
canvas.height=height;

const ctx = canvas.getContext('2d');

class Ball {
    constructor(x,y,speedx,speedy,radius,color){
        this.x =x;
        this.y =y;
        this.speedx= speedx;
        this.speedy=speedy;
        this.radius=radius;
        this.color=color;
    }
    drawBall(){
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fill();
    }
}
let ball = new Ball(100,100,5,5,20,'rgb(0,255,0)');
ball.drawBall();