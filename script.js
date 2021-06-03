'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = `⛔ It's not a number!`;
    displayMessage(`⛔ It's not a number!`);
    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector(
    //   '.message'
    // ).textContent = `😁 You Win Correct Number!!!`;
    displayMessage(`😁 You Win Correct Number!!!`);

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber
      //   ? `😒 Your Number Is Too High Guess Again!!!`
      //   : `😒 Your Number Is Too Low Guess Again!!!`;
      displayMessage(
        guess > secretNumber
          ? `😒 Your Number Is Too High Guess Again!!!`
          : `😒 Your Number Is Too Low Guess Again!!!`
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = `💥 You lost the game`;
      displayMessage(`💥 You lost the game`);
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is to high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(
  //         '.message'
  //       ).textContent = `😒 Your Number Is Too High Guess Again!!!`;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = `💥 You lost the game`;
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // When geuss is to low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(
  //         '.message'
  //       ).textContent = `😒 Your Number Is Too Low Guess Again!!!`;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = `💥 You lost the game`;
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
