export default class EventBus{
    static #subscriber =[];
    static subscribe(callback){
        if(!(callback instanceof Function))
        {
            throw new Error('invalid subscriber!')
        }
        this.#subscriber.push(callback);
    
    };
    static emit(data){

        for(let sub of this.#subscriber){
            sub(data);
        }
    }

}