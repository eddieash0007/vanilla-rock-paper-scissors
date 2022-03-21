const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()* 3)  + 1  // you can also use possibleChoices.length
    
    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML=computerChoice
    getResult()
}

function getResult(){
    if (computerChoice === userChoice){
        result = "It's a draw!"
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = "You Win!🎊"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = "You Lose!👎🏾"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = "You Win!🎊"
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = "You Lose!👎🏾"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = "You Win!🎊"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = "You Lose!👎🏾"
    }

    resultDisplay.innerHTML=result
}