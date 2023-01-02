"use strict";
// let setup = {
//     apiKey: function(){},
//     fetchWeather:function(){
//         fetch().then
//     }
// }

function setupp(){
    loadJSON('https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=e405c2dbb78e5a79771cb55742d2ade1&units=metric',gotData)
    console.log(loadJSON);
}
function gotData(data){
    let weather=data;
    console.log(weather);
}