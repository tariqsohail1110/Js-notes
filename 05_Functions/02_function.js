function calculateTotalPrice(...cart) {
    const total = cart.reduce((acc, cost) => acc + cost, 0);
    return `The total cost is ${total}`;
}

console.log(calculateTotalPrice(100, 200, 400));


function handleObject(anyObject){
    return `The username is \'${anyObject.userName}\' and email is \'${anyObject.email}\'`
}

const User = {
    userName: 'Tariq',
    email: 'tariq@mail.com'
}

console.log(handleObject(User));

function returnSecondValue(getArray) {
    return getArray[1];
}

const myArray = [100, 200, 300, 400];

console.log(returnSecondValue(myArray));