const user = {
    userName: 'Tariq',
    price: 99,

    welcomeMessage: function() {
        // console.log(`${this.userName}, welcome to the website!`); //this for context
        console.log(this);
    }
}

// user.welcomeMessage(); //--> Tariq, welcome to the website!
// user.userName = 'Muhammad';
// user.welcomeMessage(); //--> Muhammad, welcome to the website!

// console.log(this); // --> {}, different outputs in node and browser


function myFunc() {
    // console.log(this);
    const userName = 'Tariq';
    console.log(this.userName); //undefined
}
myFunc();

// +++++++++++++++++++++++++++++ Arrow Functions +++++++++++++++++++++++++++++

const myArrowFunction = () => {
    let userName = 'Tariq';
    console.log(this.userName); //undefined
}

myArrowFunction();


const addTwoNumbers = (number1, number2) => {
    return `The summation of ${number1} and ${number2} is ${number1 + number2}`;
}
// console.log(addTwoNumbers(10, 4000));

//another way (Implicit Return)

const implicitReturn = (number1, number2) => `The summation of ${number1} and ${number2} is ${number1 + number2}`; //no return statement required, no curly braces around the output, but parenthesis can be used

console.log(implicitReturn(10, 40));