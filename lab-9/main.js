"use strict";
const searchBTN = document.querySelector('.search-btn')
const inputText =document.querySelector('.search-bar');
const apiKey ='e405c2dbb78e5a79771cb55742d2ade1';


searchBTN.addEventListener('click',function(){


    const cityInput =inputText.value;
    console.log(cityInput);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
});