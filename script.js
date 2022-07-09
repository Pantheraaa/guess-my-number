'use strict';

// a) Generating a random number
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

function displayScore(scoreHere){
    document.querySelector('.score').textContent = scoreHere;
}

function btnCheckFunc() {
    let guess = Number(document.querySelector('.guess').value);

    // when there is no input:
    if (!guess) {
        displayMessage("⛔ No number!");
    }

    // When player wins:
    else if (guess === randomNumber) {
        displayMessage("🥳 Correct Number!");
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = '#e25d4e';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').style.backgroundColor = '#ff92e8';
        document.querySelector('.again').textContent = "Play again";
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    // when guess is wrong:
    else if(guess !== randomNumber){
        if (score > 1) {
            displayMessage(guess > randomNumber ? "😐 Too high!" : "😐 Too low!");
            score--;
            displayScore(score);
        } else {
            displayMessage("😭 You lost the game");
            document.querySelector('.again').textContent = "Play again";
            displayScore(0);
        }
    }

    // When player lose:
    if (!score) {
        displayMessage("😭 You lost the game");
        document.querySelector('.again').textContent = "Play again";
    }
}

const btnCheck = document.querySelector('.check').addEventListener('click', btnCheckFunc);

function btnAgainFunc() {
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    displayMessage("Start guessing...");
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.backgroundColor = '#fff';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.again').textContent = 'Play';
    displayScore(20);
    }

const btnAgain = document.querySelector('.again').addEventListener('click', btnAgainFunc);