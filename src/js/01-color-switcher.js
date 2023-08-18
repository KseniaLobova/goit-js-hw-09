const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body')
console.log(body)
startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);
stopBtn.disabled = true;
function changeColor() {
  
  colorIntervalId = setInterval(() => { body.style.backgroundColor = getRandomHexColor() }, 1000)
       
     if (colorIntervalId) {
       startBtn.disabled = true;
       stopBtn.disabled = false;
    }

}


function stopChangeColor() {
    clearInterval(colorIntervalId)
  startBtn.disabled = false;
  stopBtn.disabled = true;
    console.log('stop')
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}