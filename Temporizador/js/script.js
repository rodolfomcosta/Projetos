/*

    DOM
    Document Object Model

*/
// ES6 modules
// default export
import resetControls from "./controls.js"
import {Timer} from "./timer.js"

// variaveis
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.soundOn')
const buttonSoundOff = document.querySelector('.soundOff')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

// injeção de dependência
const timer = Timer()

// events
buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
    countDown() 
})

buttonPause.addEventListener('click', () => {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', () => {
    resetControls()
    resetTimer()
})

buttonSet.addEventListener('click', () => {
    minutes = prompt('Quantos minutos?') || 0
    updateTimerDisplay(minutes)
})

buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

