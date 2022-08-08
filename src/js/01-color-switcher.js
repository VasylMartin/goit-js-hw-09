const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')
const body = document.querySelector('body')
let intervalId = null
stopBtn.setAttribute('disabled', true)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000)
    startBtn.setAttribute('disabled', true)
    stopBtn.removeAttribute('disabled', true)
})

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId)
    startBtn.removeAttribute('disabled', true)
    stopBtn.setAttribute('disabled', true)
})