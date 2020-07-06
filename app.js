// import functions and grab DOM elements
const theeButton = document.getElementById('theOneButton');
console.log(theeButton);

const resultSpan = document.getElementById('result');

import { countsAsAYes } from './metalUtils.js';
     




theeButton.addEventListener ('click', () => {
    const name = prompt('What is your name?');
    const really = prompt('Wanna take the quiz?'); 
        if (really === false) return;
    const answer1 = prompt('Is the Flying V a metal guitar?');
    const answer2 = prompt('Does OZZY rule?');
    const answer3 = prompt('Is IPA metal?');

    let score = 0;

    if (countsAsAYes(answer1)) {
        score++;
    }

    if (countsAsAYes(answer2)) {
        score++;
    }

    if (!countsAsAYes(answer3)) {
        score++;
    }

    console.log(score);

    resultSpan.textContent = name + score;


});

// initialize state

// set event listeners to update state and DOM