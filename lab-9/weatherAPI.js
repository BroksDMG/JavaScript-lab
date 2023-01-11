export default class WeatherApi{
    constructor(name){
        this.name=name;
        
    }
    getWeather(){
        const apiKey ='e405c2dbb78e5a79771cb55742d2ade1';
        const res = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.name}&appid=${apiKey}&units=metric`)
            .then(response=>response.json())
            console.log(res);
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