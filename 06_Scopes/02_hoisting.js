function outerFunc() {
    const userName = 'Tariq';

    function innerFunc() {
        const codesIn = ['Javascript', 'Python'];
        console.log(`${userName} codes in ${codesIn[0]} & ${codesIn[1]}`); //this one will work fine
    }
    // console.log(`${userName} codes in ${codesIn[0]} & ${codesIn[1]}`); //not reachable
    innerFunc(); //the child functions can access the instances of parent functions
}

outerFunc();


if(true) {
    const userName = 'Tariq';

    if(userName === 'Tariq') {
        const website = 'YouTube';
        console.log(`${userName} has been logged in to ${website}`);
    }
    // console.log(`${userName} has been logged in to ${website}`); //Generate and error, same as functions
}

// +++++++++++++++++++++++++++++ HOISTING +++++++++++++++++++++++++++++
console.log(addTwo(5));
function  addTwo(number) {
    return number + 1;
} //if we define the function like this, we can hoist it before even defining it, But

// console.log(addTwoAgain(6)); //--> won't work
const addTwoAgain = function(number) {
    return number + 1;
} //can't hoist it if we define it like this

console.log(addTwoAgain(6)); //But this will