'use strict';


const slides= document.querySelectorAll('.slide')
const btnRight = document.querySelector('.slider_btn_right');
const btnLeft = document.querySelector('.slider_btn_left');
const slider = document.querySelector('.slider')
// document.querySelector('body').style.backgroundColor='#222';


// slides.style.backgroundColor='#222';
let slideNumber = 0;
let amountSlide = slides.length;
slides.forEach((s,i)=>(s.style.transform=
`translateX(${100*i}%)`));

slider.style.backgroundColor='#222';
// slider.style.transform = 'scale(0.8) translateX(-800px)'
btnRight.addEventListener('click',function(){
    if(slideNumber===amountSlide-1){
        slideNumber =0;
    }else{

        slideNumber++;
    }
    slides.forEach((s,i)=>(s.style.transform=
    `translateX(${100*(i-slideNumber)}%)`));
    

});
btnLeft.addEventListener('click',function(){
    if(slideNumber===0){
        slideNumber =amountSlide-1;
    }else{

        slideNumber--;
    }
    
    slides.forEach((s,i)=>(s.style.transform=
    `translateX(${100*(i-slideNumber)}%)`));
    

});









// // notatnik z zajęć
// const main = document.querySelector('main')
// const timeoutRef = setTimeout(
//     () => {
//         main.innerHTML = 'From setTimeout'
//     },
//     2000
// )
// let licznik = 0
// const intervalRef = setInterval(
//     () => {
//         main.innerHTML = 'From interval' + licznik++
//     },
//     4000
// )


// // kasujemy setInterval
// clearInterval(intervalRef)

// // kasujemy setTimeout
// clearTimeout(intervalRef)


// // window.requestAnimationFrame