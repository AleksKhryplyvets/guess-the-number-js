'use strict';

const btn = document.querySelector('.check');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
const beginningBtn = document.querySelector('.again');
let score = 20;
let highScore = 0;

const displayMessege = function (message){
   document.querySelector('.guess-message').textContent = message;
}

btn.addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent =
      'Input some number !';
  } else if (guessingNumber === randomNumber) {
    displayMessege ('You won!');
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50 rem';
    document.querySelector('.question').textContent = randomNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessingNumber !== randomNumber) {
    if (score > 1) {
      displayMessege(
        guessingNumber > randomNumber ? 'Too much!' : 'Too little!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessege ('Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   } else if (guessingNumber > randomNumber) {
  //     if (score > 1) {
  //       document.querySelector('.guess-message').textContent = 'Too much!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.guess-message').textContent = 'Game Over!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guessingNumber < randomNumber) {
  //     if (score > 1) {
  //       document.querySelector('.guess-message').textContent = 'Too little!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.guess-message').textContent = 'Game Over!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

beginningBtn.addEventListener('click', function () {
  let score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').style.width = '25 rem';
  displayMessege('Start Gussing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.number-input').value = '';
});
