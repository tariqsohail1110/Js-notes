//generate a random color
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];        
    }
    return color;
}

const body = document.querySelector('body');

let intervalId;

function startChangingColors() {
    if(!intervalId) {
        intervalId = setInterval(function() {
            body.style.backgroundColor = randomColor();
        }, 1000);
    }
}

function stopChangingColors() {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColors);

document.querySelector("#stop").addEventListener('click', stopChangingColors);