class Slider{
    constructor(elemSelector){
        this.currentSlide = 0;
        this.sliderSelector = elemSelector;
        this.elem= null;
        this.slider = null;
        this.slides= null;
        this.prev =null;
        this.next = null;
        this.dots= [];

        generateSlider();{
            this.slider = document.querySelector(this.sliderSelector);
            this.slider.classLisst.add("slider");

            const slidesCnt = document.createElement("div");
            slidesCnt.classLisst.add("slider-slides-cnt");
            
            this.slides =this.slider.ch

            while(this.slides.len)
        }
         
    }
}

// notatnik z zajęć
const main = document.querySelector('main')
const timeoutRef = setTimeout(
    () => {
        main.innerHTML = 'From setTimeout'
    },
    2000
)
let licznik = 0
const intervalRef = setInterval(
    () => {
        main.innerHTML = 'From interval' + licznik++
    },
    4000
)


// kasujemy setInterval
clearInterval(intervalRef)

// kasujemy setTimeout
clearTimeout(intervalRef)


// window.requestAnimationFrame