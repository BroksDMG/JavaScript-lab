import Logger from "./logger.js";
import EventBus from "./event-bus.js";



EventBus.subscribe(saveCToSessionStorage);
EventBus.subscribe(discoverPowerBallNumber);

interval();
function interval() {
        let timer = 1
        setInterval(
          () => {
            // mamy coupling - interval ma na sztywno zaszyte w sobie C i D (..i logger)
            EventBus.emit(timer);
            timer++
          }
          , 2000) 
    
  
}

///logger wyodrębniony

function saveCToSessionStorage(data) {
  console.log('[reader C]', data)
  const storageData = { data }
  sessionStorage.setItem('C', JSON.stringify(storageData))
  // brudzimy funkcję loggerem - to nie jest jej funkcjonalność!
  Logger.log(`[log from C] ${data}`)
}

function discoverPowerBallNumber(data) {
  const number = Math.floor(Math.random() * data * 100)
  console.log('[powerball number]', number)
}