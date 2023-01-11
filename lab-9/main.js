"use strict";
// import WeatherApi from "./weatherAPI.js";
const searchBTN = document.querySelector('.search-btn')
const inputText =document.querySelector('.search-bar');
const cityCard =document.querySelector('.city');
const tempCard =document.querySelector('.temp');
const card =document.querySelector(".card");
const descriptionCard =document.querySelector('.description');
const humidityCard = document.querySelector('.humidity');
const windCard= document.querySelector('.wind')
const apiKey ='e405c2dbb78e5a79771cb55742d2ade1';
class App{
    constructor(element){
        this.element=element;
        this.cities =[];
    }
    addCity(city){
        this.cities.push(city)
        this.render();
    }
    removeCity(city){
        const index =this.cities.findIndex(c=>c.name===city.name);
        this.cities.splice(index,1);
    }
    render(){
        this.element.innerHTML=''
        this.cities.map;
    }
}

class WeatherApi{
     constructor(name){
        this.name=name;
    }
    async getWeather(){
            const res =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.name}&appid=${apiKey}&units=metric`)
            .then(response=>response.json())
            // .then(result=>console.log(result));
            console.log(res);
            this.temp= res.main.temp;
            return this.temp
    }
    removeCity(city){
        const index =this.cities.findIndex(c=>c.name===city.name);
        this.cities.splice(index,1);
    }
    render(){
        this.element.innerHTML=''
        this.cities.map;
    }
}

searchBTN.addEventListener('click',function(){
    const cities =new WeatherApi(inputText.value);
    console.log(cities);

})










// let cityInput;
// function weather(){
//     card.innerHTML=`
//     <input type="text" class="search-bar">
//     <button class="btn search-btn"></button>
//     <div class="weather">
//         <h2 class="city">Weather in Krakow</h2>
//         <div class="temp">51*C</div>
//         <img src="" alt="" class="icon">
//         <div class="description">Cloudy</div>
//         <div class="humidity">Humidity:60%</div>
//         <div class="wind">wind speed: 6.2 km/h</div>
//     </div> 
//     `
// }
// const city =new WeatherApi(cityInput)
// console.log(city);
// searchBTN.addEventListener('click',function(){
//     weather()
//     cityInput =inputText.value;
//     console.log(cityInput);
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
//     .then(res=>res.json())
//     .then(data=>{
//         cityCard.textContent=`Weather in ${data.name}`;
//         tempCard.textContent=`${data.main.temp}°C`;
//         descriptionCard.textContent=data.weather[0].description
//         humidityCard.textContent=`Humidity: ${data.main.humidity}%`
//         windCard.textContent=`Wind speed: ${data.wind.speed} km/h`
//         console.log(data);
//     })
// });