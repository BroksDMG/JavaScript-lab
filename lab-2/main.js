
const slides= document.querySelectorAll('.slide')
const btnRight = document.querySelector('.slider_btn_right');
const btnLeft = document.querySelector('.slider_btn_left');

let slideNumber = 0;
slides.foreach((s,i)=>(s.style.transform=
`translateX(${100*i}%)`));

const slider = document.querySelector('.slider')
slider.style.transform = 'scale(0.1) translateX(-800px)'
btnRight.addEventListener('click',function(){
 slideNumber++;

slides.foreach((s,i)=>(s.style.transform=
`translateX(${100*(i-slideNumber)}%)`));
})









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