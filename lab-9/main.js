"use strict";
const searchBTN = document.querySelector('.search-btn')
const inputText =document.querySelector('.search-bar');
const cityCard =document.querySelector('.city');
const tempCard =document.querySelector('.temp');
const card =document.querySelector(".card");
const descriptionCard =document.querySelector('.description');
const humidityCard = document.querySelector('.humidity');
const windCard= document.querySelector('.wind')
const apiKey ='e405c2dbb78e5a79771cb55742d2ade1';
let cityInput;
function weather(){
    card.innerHTML=`
    <div class="weather">
        <h2 class="city">Weather in Krakow</h2>
        <div class="temp">51*C</div>
        <img src="" alt="" class="icon">
        <div class="description">Cloudy</div>
        <div class="humidity">Humidity:60%</div>
        <div class="wind">wind speed: 6.2 km/h</div>
    </div> 
    `
}
searchBTN.addEventListener('click',function(){
    weather()
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