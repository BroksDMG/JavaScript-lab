const audioEls = document.querySelectorAll("audio");
const recordbtn = document.querySelector('.record-btn');
document.addEventListener("keypress", onKeyPress);
console.log(onKeyPress);
const KeyToSound = {};
for (let i = 1; i <= audioEls.length; i++) {
  KeyToSound[i] = audioEls[i - 1].id;
}

function onKeyPress(event) {
  const keys = Object.keys(KeyToSound);
  if (keys.includes(event.key)) {
    const sound = KeyToSound[event.key];
    playSound(sound);
  }
}

function playSound(sound) {
  const audioTag = document.querySelector("#" + sound);
  audioTag.currentTime = 0;
  audioTag.play();
}

function recordSound() {}
// Date.now()

//przypięcie klawiszy do dzwięku{
    //wyswietlenie klawisza w consoli
    //
//}
