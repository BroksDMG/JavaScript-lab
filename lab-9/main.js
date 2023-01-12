"use strict";
// import WeatherApi from "./weatherAPI.js";
const searchBTN = document.querySelector('.search-btn')
const inputText =document.querySelector('.search-bar');
const cityCard =document.querySelector('.city');
const card =document.querySelector(".card");
const apiKey ='e405c2dbb78e5a79771cb55742d2ade1';
const weatherCardContainer=document.querySelector('.weather-container')
let cityData
let removeBtns;

let cityInput;
let cities=localStorage.getItem('cities')
    ? localStorage.getItem("cities").split(",")
    : [];
searchBTN.addEventListener('click',function(){
    cityInput =inputText.value;
    console.log(cityInput);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
    .then((res)=>res.json())
    .then(data=>cityData=data)
    .then(()=>{
        localStorage.setItem([cityData.name,],JSON.stringify(cityData))})
    
        // cities.push(data)
    .then(()=>weather(JSON.parse(localStorage.getItem(cityData.name))))
    // console.log(cities);
});

function weather(data){
    const weatherCard =document.createElement("div");
    weatherCard.classList.add('weather')
    
        const html=`
        <button class="remove">X</button>
        <h2 class="city">Weather in ${data.name}</h2>
        <div class="temp">${data.main.temp}°C</div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"" alt="" class="icon">
        <div class="description">${data.weather[0].description}</div>
        <div class="humidity">Humidity: ${data.main.humidity}%</div>
        <div class="wind">Wind speed: ${data.wind.speed} km/h</div> 
        `
    weatherCard.innerHTML=html
    weatherCardContainer.appendChild(weatherCard)
    
    save(data.name)
    removeBtns= document.querySelectorAll(".remove");
    for (const removeBtn of removeBtns) {
        removeBtn.addEventListener('click',remove)
    }
    
}

function remove(){
    if(cities.length===0)return;
    for(let city of cities){
       
        
        const index= cities.findIndex(c=>c.name===city.name)
        cities.splice(index,1)
        localStorage.setItem('cities',cities)
        JSON.parse(localStorage.getItem(city))
        
    }
    
}
function save(city){
    if(cities.includes(city)) return
    if(cities.length>9)cities.pop();
    cities.unshift(city)
    localStorage.setItem('cities',cities)
    
}

function show(){

    if(cities.length===0)return;
    for(let city of cities){
    weather(JSON.parse(localStorage.getItem(city)))
    }
}
show()













// class App{
//     constructor(element){
//         this.element=element;
//         this.cities =[];
//     }
//     addCity(city){
//         this.cities.push(city)
//         this.render();
//     }
//     removeCity(city){
//         const index =this.cities.findIndex(c=>c.name===city.name);
//         this.cities.splice(index,1);
//     }
//     render(){
//         this.element.innerHTML=''
//         this.cities.forEach(city=>WeatherApi.render(this.element));
//     }
// }

// class WeatherApi{
//      constructor(name){
//         this.name=name;
//     }
//     async getWeather(){
//             const res =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.name}&appid=${apiKey}&units=metric`)
//             .then(response=>response.json())
//             // .then(result=>console.log(result));
//             console.log(res);
//             this.temp= res.main.temp;
//             return this.temp
//     }
//     render(container){
//         // const temp =await this.getWeather()
//         const weathersContainer = document.createElement('div')
//         weathersContainer.innerHTML=`
//         <span class="city-temp">50%</span>
//         <span class="city-name">50%</span>
//         <span class="city-close">50%</span>
//         `
//         container.appendChild(weathersContainer);
//         console.log(weathersContainer);
//     }
// }

// const app = new App(document.querySelector('weather-locations'))
// console.log(app);
// searchBTN.addEventListener('click',function(){
//     const cities =new WeatherApi(inputText.value);
//     console.log(cities);

// })