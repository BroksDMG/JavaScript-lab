'use strict';


const slides= document.querySelectorAll('.slide')
const btnRight = document.querySelector('.slider_btn_right');
const btnLeft = document.querySelector('.slider_btn_left');
const slider = document.querySelector('.slider')
// document.querySelector('body').style.backgroundColor='#222';
const dots = document.querySelector('.dots');

// slides.style.backgroundColor='#222';

const newDot = function(){
    slides.forEach(function(_,i){
        dots.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`);
    });
};
newDot();

const activateDots =function(slide){
    document
    .querySelectorAll('.dots__dot')
    .forEach(dot=> dot.classList
    .remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
activateDots(0);

let slideNumber = 0;
let amountSlide = slides.length;
slides.forEach((s,i)=>(s.style.transform=
`translateX(${100*i}%)`));


slider.style.backgroundColor='#222';

btnRight.addEventListener('click',function(){
    if(slideNumber===amountSlide-1){
        slideNumber =0;
    }else{

        slideNumber++;
    }
    slides.forEach((s,i)=>(s.style.transform=
    `translateX(${100*(i-slideNumber)}%)`));
    
     activateDots(slideNumber);
});
btnLeft.addEventListener('click',function(){
    if(slideNumber===0){
        slideNumber =amountSlide-1;
    }else{

        slideNumber--;
    }
    
    slides.forEach((s,i)=>(s.style.transform=
    `translateX(${100*(i-slideNumber)}%)`));
    
    activateDots(slideNumber);
});

dots.addEventListener('click',function(e){
    if(e.target.classList.contains('dots__dot')){
    const slide = e.target.dataset.slide;
    slides.forEach((s,i)=>(s.style.transform=
        `translateX(${100*(i-slide)}%)`));
        activateDots(slide);
    };
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