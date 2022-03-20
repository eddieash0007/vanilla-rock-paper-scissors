const cardArray = [
    {
        name: 'fries',
        img: '../assets/memoryGame/images/french-fries.png'
    },
    {
        name: 'cheeseburger',
        img: '../assets/memoryGame/images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: '../assets/memoryGame/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: '../assets/memoryGame/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: '../assets/memoryGame/images/pizza.png'
    },
    
    {
        name: 'milkshake',
        img: '../assets/memoryGame/images/milkshake.png'
    },
    {
        name: 'fries',
        img: '../assets/memoryGame/images/french-fries.png'
    },
    {
        name: 'cheeseburger',
        img: '../assets/memoryGame/images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: '../assets/memoryGame/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: '../assets/memoryGame/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: '../assets/memoryGame/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: '../assets/memoryGame/images/milkshake.png'
    },

]



const sound = document.querySelector('#sound')

function play(){
    var win = new Audio('../assets/memoryGame/sounds/mixkit-quick-win-video-game-notification-269.wav')
    win.oncanplaythrough = function(){
        win.play();
        }
    
   
}


cardArray.sort(()=> 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []



function createBoard(){
    for (let i = 0; i < cardArray.length; i++ ){
        const card = document.createElement('img')
        card.setAttribute('src', '../assets/memoryGame/images/dices.png')
        card.setAttribute('data-id', i)
        card.setAttribute('width', '100px')
        card.setAttribute('height', '100px')
        card.setAttribute('style', 'margin:5px;')
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneID = cardsChosenIds[0]
    const optionTwoID = cardsChosenIds[1]
    if(optionOneID == optionTwoID){
        cards[optionOneID].setAttribute('src', '../assets/memoryGame/images/dice.png')
        cards[optionTwoID].setAttribute('src', '../assets/memoryGame/images/dice.png')
        alert('You have clicked the same image')
        
    }


    if (cardsChosen[0] == cardsChosen[1]){
        console.log('You found a match!')
        cards[optionOneID].setAttribute('src', '../assets/memoryGame/images/white.png')
        cards[optionTwoID].setAttribute('src', '../assets/memoryGame/images/white.png')
        cards[optionOneID].removeEventListener('click',flipCard)
        cards[optionTwoID].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    }else {
        cards[optionOneID].setAttribute('src', '../assets/memoryGame/images/dices.png')
        cards[optionTwoID].setAttribute('src', '../assets/memoryGame/images/dices.png')
        alert('Try again')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosenIds)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout( checkMatch, 500)
    }
}



