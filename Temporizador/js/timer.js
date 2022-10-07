// functions

// padrão factory - função que retorna um objeto
export default function Timer({ //desestruturação da função
    minutesDisplay,
    secondsDisplay,
    reset,
}){
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(newMinutes, seconds){
        // newMinutes || minutes - erro de lógica pq falsy com minutes = 0 
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function countdown(){
        timerTimeOut = setTimeout(() => {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            updateDisplay(minutes, 0)

            if (minutes <= 0 && seconds <= 0){
                reset()
                updateDisplay()
                return
            }

            if (seconds <= 0){
                seconds = 60
                --minutes
            }       
            updateDisplay(minutes, String(seconds - 1))
            
            countdown() // recursão - quando uma função chama ela mesma
        }, 1000)
    }

    function reset(){
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function updateMinutes(newMinutes){
        minutes = newMinutes
    }

    function hold(){
        clearTimeout(timerTimeOut)
    }

    return {
        countdown, // shorthand - propriedade e valor de msm nome
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }

    /*
    let output = {
        countdown: countdown
    }

    return output
    */
}

// named export
// export { }