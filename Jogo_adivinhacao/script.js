// variaveis
const randomNumber = Math.round(Math.random() * 10)
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let xAttempts = 1

// callback function
function handleTryClick(event){
    event.preventDefault() // não faça o padrao

    const inputNumber = document.querySelector('#inputNumber')

    console.log(randomNumber, inputNumber.value)
    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector('h2').innerText = `Você acertou em ${xAttempts} tentativas`
        
        
    }
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1
}

function toggleScreen(){
    screen2.classList.toggle('hide')
    screen1.classList.toggle('hide')
}

// events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)