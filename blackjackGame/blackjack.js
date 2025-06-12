
let cards = [0, 0]
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");



function getRandomCard() {
    return Math.floor((Math.random() * 11) + 1);
}

function startGame() {
    cards = [0,0];
    sum = 0;
    cardEl.textContent = "Cards: ";
    cards[0] = getRandomCard();
    cards[1] = getRandomCard();
    for(let i=0; i<cards.length; i++){
        sum += cards[i];
        cardEl.textContent += " " + cards[i];
    }
    sumEl.textContent = "Sum: " + sum;
    renderGame();
    messageEl.textContent = message;
}

function renderGame() {
    if (!messageEl) {
        console.error("Element with id 'message-el' not found. Ensure the DOM element exists.");
    }


    if (sum < 21) { 
        message = "Do you want to draw a new card? 🙂"
        console.log(message)
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        console.log(message)
        hasBlackJack = true;
    } else {
        message = "Wohoo! You've got Blackjack! 🥳"
        endGame();
    }
}

function endGame() {
        message = "You're out of the game! 😭"
        isAlive = false;
        
        messageEl.textContent = message
        firstCard = 0;
        secondCard = 0;
}
function drawNewCard(){ 
    if(isAlive){
        let newCard = getRandomCard();
        cards.push(newCard);
        sum += newCard;
        cardEl.textContent += " " + newCard;
        sumEl.textContent = "Sum: " + sum;
        renderGame();
    }
    
}

// Removed unnecessary logging of message outside the start() function
console.log(message);

console.log(isAlive);
