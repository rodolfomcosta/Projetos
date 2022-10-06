// functions

// padrão factory - função que retorna um objeto
export function Timer({ //desestruturação da função
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,

}){

    function updateTimerDisplay(minutes=0, seconds=0){
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function countdown(){
        timerTimeOut = setTimeout(() => {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            updateTimerDisplay(minutes, 0)

            if (minutes <= 0){
                resetControls()
                return
            }

            if (seconds <= 0){
                seconds = 10
                --minutes
            }       
            updateTimerDisplay(minutes, String(seconds - 1))
            
            countDown() // recursão - quando uma função chama ela mesma
        }, 1000)
    }

    function resetTimer(){
        updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    return {
        countdown // shorthand - propriedade e valor de msm nome
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