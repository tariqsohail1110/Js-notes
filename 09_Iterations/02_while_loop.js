let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

//for array
let myArray = ['Python', 'Javascript', 'Java'];

let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr++;
}

//do while loop

let score = 11;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10); //Score is 11, as it's do-while so the code will execute first then the condition will be checked