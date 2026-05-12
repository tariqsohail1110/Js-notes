let randomNum = parseInt(Math.round(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const rem = document.querySelector('.lastResult'); 
const lowOrHigh = document.querySelector('.lowOrHi'); 
const startOver = document.querySelector('.resultParas'); 

const p = document.createElement('p');

let prevGuess = [];
let numOfGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter valid number');
    } else if(guess < 1) {
        alert('Please enter a number above 0');
    } else if(guess > 100) {
        alert('Please enter a number below 100');
    } else {
        prevGuess.push(guess);
        if(numOfGuess === 10) {
            displayeGuess(guess);
            displayMessage(`Game Over, the number was ${randomNum}`);
            endGame();
        } else {
            displayeGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNum) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNum) {
        displayMessage(`Number is TOOO low`);
    } else if (guess > randomNum) {
        displayMessage(`Number is TOOO high`);
    }
}

function displayeGuess(guess) {
    userInput.value = ''; //cleanup
    guessSlot.innerHTML += `${guess}, `;
    numOfGuess++;
    rem.innerHTML = `${11 - numOfGuess}`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
    const restart = document.querySelector('#newGame');
    restart.addEventListener('click', (event) => {
        randomNum = parseInt(Math.round(Math.random() * 100 + 1));
        prevGuess = [];
        numOfGuess = 1;
        guessSlot.innerHTML = '';
        rem.innerHTML = `${11 - numOfGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', ''); //key value pair
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}