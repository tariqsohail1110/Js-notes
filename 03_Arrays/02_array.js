// if pushing an array in an array, it will add the pushed array in the array

const languages = ['English', "Spanish", "German"];
const countries = ["England", "Spain", "Germany"];

// languages.push(countries);

// console.log(languages); //[ 'English', 'Spanish', 'German', [ 'England', 'Spain', 'Germany' ] ]

// better approaches
const merged = [...languages, ...countries];
console.log('Merged Array:', merged); //[ 'English', 'Spanish', 'German', 'England', 'Spain', 'Germany' ] creates a copy

// or
console.log('After concat:', languages.concat(countries)); //[ 'English', 'Spanish', 'German', 'England', 'Spain', 'Germany' ] returns a new array


//flat
const weird_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const solved_array = weird_array.flat(3); //(3) => depth, can be Infinity too, but not a good approach
console.log('Solved Array:', solved_array); //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

//Array.from()
console.log('Array.isArray:', Array.isArray("Tariq")); //False => as it's string
console.log('Array.from:', Array.from('Tariq')); //[ 'T', 'a', 'r', 'i', 'q' ] => creates and array from the given string
console.log('Array.from (Object):', Array.from({name: 'Tariq'})); //[] => returns and empty array as the key or value isn't provided
const object = {name: 'Tariq'};
console.log('Array.from (defined Object):', Array.from(object.name)); //[ 'T', 'a', 'r', 'i', 'q' ]

//Array.of
const studentName = 'Tariq';
const age = 22;
const rollNo = 343;

console.log('Array.of:', Array.of(studentName, age, rollNo)); //Array.of: [ 'Tariq', 22, 343 ] => creates an array of the provided elements