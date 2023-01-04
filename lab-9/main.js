"use strict";
const searchBTN = document.querySelector('.search-btn')
const inputText =document.querySelector('.search-bar');
const cityCard =document.querySelector('.city');
const tempCard =document.querySelector('.temp');
const descriptionCard =document.querySelector('.description');
const humidityCard = document.querySelector('.humidity');
const windCard= document.querySelector('.wind')
const apiKey ='e405c2dbb78e5a79771cb55742d2ade1';
let cityInput;

searchBTN.addEventListener('click',function(){
    cityInput =inputText.value;
    console.log(cityInput);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
    .then(res=>res.json())
    .then(data=>{
        cityCard.textContent=`Weather in ${data.name}`;
        tempCard.textContent=`${data.main.temp}°C`;
        descriptionCard.textContent=data.weather[0].description
        humidityCard.textContent=`Humidity: ${data.main.humidity}%`
        windCard.textContent=`Wind speed: ${data.wind.speed} km/h`
        console.log(data);
    })
});