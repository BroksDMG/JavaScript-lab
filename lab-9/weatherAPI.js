export default class weatherApi{
    constructor(element){
        this.element=element;
        this.cities =[];
    }
    addCity(city){
        this.cities.push(city)
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