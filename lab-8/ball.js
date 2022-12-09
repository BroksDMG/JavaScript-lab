
const canvas =document.querySelector('canvas');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width=width;
canvas.height=height;
const ctx = canvas.getContext('2d');
export default class Ball {
    
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
        ctx.fillStyle='rgb(0,0,0)';
        // ctx.fillStyle='rgb(0,0,0)';
        ctx.shadowColor=this.color
        ctx.shadowBlur=15;
        
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fill();
    }
    moveBall(){
        if(this.x+this.radius>=width|| this.x-this.radius<=0){
            this.speedx=-this.speedx;
        }
        if(this.y+this.radius>=height||this.y-this.radius<=0){
            this.speedy=-this.speedy;
        }
        this.x+=this.speedx;
        this.y+=this.speedy;
    }
}