'use strict';

// Getting the ramdom number
let SecretNumber = Math.trunc(Math.random() * 21);

//setting the score of the game
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = SecretNumber;
console.log(SecretNumber);

//getting the guess number from the user
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);

  //evaluating the guess number

  //when there is no input
  if (!guessNumber) {
    document.querySelector('.message').textContent = '⚠ No Number!!!';
  }

  //when the number matches the seccret number
  else if (guessNumber === SecretNumber) {
    document.querySelector('.message').textContent = 'Correct Answer!!';

    //changing the background color
    document.querySelector('body').style.backgroundColor = '#60b347';

    //changing the width of the answer box
    document.querySelector('.number').style.width = '30rem';

    //shwoing the correct number in the answer box
    document.querySelector('.number').textContent = SecretNumber;

    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
  } else if (guessNumber !== SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > SecretNumber ? 'Too High!!' : 'Too Low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game..';
      document.querySelector('.score').textContent = '0';
    }
  }

  // //when the number is greater than the secret number
  // else if (guessNumber > SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game..';
  //     document.querySelector('.score').textContent = '0';
  //   }
  // }

  // //when the number is less than the secret number
  // else if (SecretNumber > guessNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game..';
  //     document.querySelector('.score').textContent = '0';
  //   }
  // }
});

//Reset Option
let resetButton = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;

    SecretNumber = Math.trunc(Math.random() * 21);

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';

    document.querySelector('.score').textContent = '0';
    document.querySelector('.guess').value = '';
  });
