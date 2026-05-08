for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log('5 is printed');
    }
    // console.log(element);
} //ctrl + d for duplication


//Nested loops
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} $ outer loop ${i}`);
        // console.log(`${i} x ${j} = ${i * j}`);
    }
}

const myArray = ['Java', 'Python', 'JavaScript'];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); 
}

// +++++++++++++++++++++ Keywords used in loop +++++++++++++++++++++
//break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('5 detected, breaking the loop....');
        break;
        /*
        Value of i is: 1
        Value of i is: 2
        Value of i is: 3
        Value of i is: 4
        5 detected, breaking the loop....
        */
    }
    console.log(`Value of i is: ${index}`);
}


///////////////////////////////////////////////////////

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('5 detected, skipping....');
        continue;
        /*
        Value of i is: 1
        Value of i is: 2
        Value of i is: 3
        Value of i is: 4
        5 detected, breaking the loop....
        */
    }
    console.log(`Value of i is: ${index}`);
}