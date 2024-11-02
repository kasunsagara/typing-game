const display = document.querySelector('.circle');
const correct = document.querySelector('#correct');
const wrong = document.querySelector('#wrong');
const progress = document.querySelector("progress");
const miss = document.querySelector("#miss");
const speed = document.getElementById("speed");
let character;
let timer;

function randomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    
    character = alphabet[randomIndex];
    character = character.toUpperCase();
    display.innerHTML = character;
}
randomLetter();

document.addEventListener('keyup', (e) => {
    key = e.key.toUpperCase();
    if (key === character) {
        correct.innerHTML++;
    } else {
        wrong.innerHTML++;
    }
    randomLetter();
    startTimer();
});

let delay = 1000;
function startTimer() {
    progress.value = 0;
    clearInterval(timer);
    timer = setInterval(function() {
        progress.value += 10;
        if (progress.value >= 100) {
            miss.innerHTML++;
            randomLetter();
            startTimer();
        }
    }, delay);
}

speed.onchange = function() {
    delay = 1000 - speed.value;
    startTimer();
}
