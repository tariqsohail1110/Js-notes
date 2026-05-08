const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => num > 4);
console.log(newNums);// [ 5, 6, 7, 8, 9, 10 ]

const newNums2 = myNums.filter( (num) => {
    return num <= 4 //return is necessary for this syntax
});
console.log(newNums2); //[ 1, 2, 3, 4 ]

//how to do it using forEach

const filteredArr = [];

myNums.forEach( (num) => {
    if (num > 4) {
        filteredArr.push(num);
    }
})
console.log(filteredArr); //[ 5, 6, 7, 8, 9, 10 ]


//Let's work on a example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (book) => book.genre === 'History');

userBooks = books.filter( (book) => book.publish >= 2000);

userBooks = books.filter( (book) => book.genre === 'Science' && book.publish >= 2000);
console.log(userBooks);


// +++++++++++++++++++++++++ Map +++++++++++++++++++++++++

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = myNumbers.map((num) => num + 10);
console.log(newNumbers);


//chaining
const newNumbers2 = myNumbers
    .map((num) => num * 10)
        .map((num) => num + 1)
            .filter((num) => num >= 50)

console.log(newNumbers2);


// +++++++++++++++++++++++++ Reduce +++++++++++++++++++++++++

//syntax
/*
const initialValue = 0;
const sum = array.reduce(
    (accumulator, currentValue) => accumulator + current Value, initialValue
);
*/

const numsToReduce = [1, 2, 3, 4];

const result = numsToReduce.reduce((acc, crt) => {
    // console.log(`acc: ${acc} and crt: ${crt}`);
    return acc + crt
}, 0);
console.log(`The result of reduce is \'${result}\'`);

//or
const result2 = numsToReduce.reduce((acc, crt) => acc + crt, 0);
console.log(`The result of reduce is \'${result2}\'`);

//or
const result3 = numsToReduce.reduce(function (acc, crt) {
    // console.log(`acc: ${acc} and crt: ${crt}`);
    return acc + crt
}, 0);
console.log(`The result of reduce is \'${result3}\'`);

/////////////////////////////////////////////////////////////

const shoppingCart = [
    {
        itemName: 'Hair Dryer',
        price: 1299
    },
    {
        itemName: 'Trimmer',
        price: 599
    },
    {
        itemName: 'Hair Spray',
        price: 999
    },
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(`The total amount is: ${total}`);
