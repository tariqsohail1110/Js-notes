const form = document.querySelector('form');
// this will give empty values, as the values will be fetched when the page loads
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value); //id = #, class = ., tag = tag name
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid height';
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid weight';
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        //show the result
        if (bmi < 18.6) {
            results.innerHTML = `<span>Your calculated BMI is ${bmi}<br>\'Underweight\'</br></span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>Your calculated BMI is ${bmi}<br>\'Normal\'</br></span>`;
        } else {
            results.innerHTML = `<span>Your calculated BMI is ${bmi}<br>\'Overweight\'</br></span>`;
        } 
    }
})