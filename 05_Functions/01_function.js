function sayMyName() {
    console.log('T');
    console.log('A');
    console.log('R');
    console.log('I');
    console.log('Q');
} // --> function definition

sayMyName();  //sayMyName --> reference, () --> execution

function addTwoNums(num1, num2) {
    return `The answer of ${num1} + ${num2} is ${num1 + num2}`; //return is used to store the value
}

const result = addTwoNums(1, 3); //The answer of 1 + 3 is 4
// addTwoNums(3, '4'); //The answer of 3 + 4 is 34 
// addTwoNums(3, 'a'); //The answer of 3 + a is 3a

console.log(result);

function userLogInMessage(userName) {
    if(!userName) {
        console.log('Please enter a user name');
        return;
    }
    return `${userName} just logged in`;
}

console.log(userLogInMessage('Tariq'));