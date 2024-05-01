'use strict';
// document.querySelector('.message').textContent = '🎉Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!🎉';
// document.querySelector('.score').textContent = 23;
// document.querySelector('.number').textContent = 10;
// document.querySelector('.guess').value = 23;
// 3:8
// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   let score = Number(document.querySelector('.score').textContent);
//   //   document.querySelector('.message').textContent = 'yes';
//   if (!guess) {
//     document.querySelector('.message').textContent = 'no number❌❌❌❌';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number!🎉';
//   } else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = 'Too High📈📈';
//     document.querySelector('.score').textContent = --score;
//   } else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'Too Low📉📉';
//     document.querySelector('.score').textContent = --score;
//   }
// });
// // 11;18
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let content = function (one, two) {
  document.querySelector(`.${one}`).textContent = two;
};
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);
  // if there is no guess

  if (!guess) {
    if (score === 1) {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'you lose';
    } else {
      document.querySelector('.message').textContent = 'No Number❌⛔';
      score--;
      document.querySelector('.score').textContent = score;
    }
    //if the guess is tight
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'congrats';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').style.color = 'red';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // uf the guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'too high📈' : 'too low📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      content('message', 'you losetttt');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.color = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
