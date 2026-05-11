const clock = document.querySelector('#clock');
//or
// const clock = document.getElementById('clock');

setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); //miliseconds