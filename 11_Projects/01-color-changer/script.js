const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (event) => {
        // console.log(event);
        // console.log(event.target);
        switch(event.target.id) {
            case 'grey':
            case 'white':
            case 'blue':
            case 'yellow':
                body.style.backgroundColor = event.target.id;
                break;
        }
    });  
})