// import quotes from './quotes.json' assert { type : 'json'};
// import quotes from quotes.js
// import * as data from './quotes.json'

// const {quotes} = data'''
import {data} from "./modules/quotes.js"
const quotes = data;

const headingEl = document.querySelector(".heading-el")
const quoteBtn = document.querySelector("#btn")

const getRandomNo = function() {
    return Math.floor(Math.random() * quotes.length) + 1;
}

quoteBtn.addEventListener('click', function(){
    let no = getRandomNo();
    
    const randomQuote = quotes[no];
    const quoteEl = headingEl.childNodes[3];
    const author = headingEl.childNodes[5];

    quoteEl.textContent = randomQuote.text;
    author.textContent = "-- " + randomQuote.author;

});