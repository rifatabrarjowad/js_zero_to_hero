'use strict';

const x = function () {
    console.log(23);
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    if (!guess) {
        document.querySelector('.massage').textContent = 'No number !';
    } else if (guess === secretNumber) {
        document.querySelector('.massage').textContent = 'Correct Number'
    }

})
