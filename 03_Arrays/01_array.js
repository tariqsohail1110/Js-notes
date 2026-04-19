//Arrays can contai  elements of any data type
//They make shallow copies, which means the original array will change too (the opp is deep copy, which maens the original value doesn't change)

const newArr = [1, 2, 3, 4, 5];
// or
const constructorArray = new Array(1, 2, 3, 4, 5);

console.log('newArr:', newArr);
console.log('construtorArray:', constructorArray);

//functions
console.log('Accessing element on index 3:', newArr[3]);

newArr.push(6); //6 is not the index, it's the value to be pushed
console.log('Pushing element in newArr:', newArr);

newArr.pop(); //removes the last element from the array
console.log('Poping out an element from array:', newArr);

newArr.unshift(11); //adds the given value in the start
console.log('Using unshift:', newArr);

newArr.shift(); //removes the element from index 0
console.log('Using shift', newArr);

//boolean funtions in arrays
console.log('Includes:', newArr.includes(1)); //if the value exists true, else false
console.log('Index Of:', newArr.indexOf(3)); //if the element exists it will return the index, else -1

//joining
const joinArr = newArr.join(); //changes the array elements to a string
console.log('Joined Array:', joinArr);
console.log('Type of joined array:', typeof newArr);

//Slice and Splice
console.log('Before Slice:', newArr);
console.log('With Slice:', newArr.slice(1, 3)); //(1, 3-1 = 2) doesn't change the original array, just extracts the provided range
console.log('After Slice:', newArr);

console.log('Before Splice:', newArr);
console.log('With Splice:', newArr.splice(1, 3)); //(1, 3) changes the original array, extracts the provided range, while keeping only the remaining elements in the original array
console.log('After Splice:', newArr);