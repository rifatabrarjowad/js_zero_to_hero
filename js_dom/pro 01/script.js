'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// const secretNumber = 3;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    if (!guess) {
        document.querySelector('.massage').textContent = 'No number !';
    } else if (guess === secretNumber) {
        document.querySelector('.massage').textContent = 'Correct Number'
    }

})
