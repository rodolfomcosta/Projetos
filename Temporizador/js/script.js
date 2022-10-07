/*

    DOM
    Document Object Model

*/
// ES6 modules
// default export
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import { // pode desestruturar diretamente no import, ou numa variável
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

// injeção de dependência
const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff
})

const sound = Sound()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

// events
buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
    sound.pressButton()
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

