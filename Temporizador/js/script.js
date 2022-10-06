/*

    DOM
    Document Object Model

*/
// ES6 modules
// default export
import Controls from "./controls.js"
import resetControls from "./controls.js"
import Timer from "./timer.js"

// variaveis
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.soundOn')
const buttonSoundOff = document.querySelector('.soundOff')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')



// injeção de dependência
const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

// events
buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown() 
})

buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
})

buttonStop.addEventListener('click', () => {
    controls.reset()
    timer.reset()
})

buttonSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes()
    if (!newMinutes){
        timer.reset()
        return
    }
    timer.updateMinutes(newMinutes)
    timer.updateDisplay(newMinutes)
})

buttonSoundOn.addEventListener('click', () => {
    controls.soundOn()
})

buttonSoundOff.addEventListener('click', () => {
    controls.soundOff()
})

