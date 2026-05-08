const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
    console.log(element);
}

const greetings = 'Hello world!'

for (const greet of greetings) {
    if (greet == ' '){
        continue;
    }
    console.log(`Each Char is ${greet}`);
}

//Maps (it has unique values, no duplications)

const map = new Map();
map.set('PK', 'Pakistan');
map.set('US', 'United States of America');
map.set('FR', 'France');

console.log(map);
/*
Map(3) {
  'PK' => 'Pakistan',
  'US' => 'United States of America',
  'FR' => 'France'
}
*/

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

//Object
const myObject = {
    'game1': 'FIFA',
    'game2': 'NFS',
    'game3': 'Tekken',
    'game4': 'COD'
}

//for In
for (const key in myObject) {
    console.log(`${key} is ${myObject[key]}`);
}
/*
game1 is FIFA
game2 is NFS
game3 is Tekken
game4 is COD
*/

//for In loop in arrays
const programming = ['JS', 'Ruby', 'Python', 'Java', 'C++'];

for (const key in programming) {
    console.log(programming[key]);   
}
/*
JS
Ruby
Python
Java
C++
*/

for (const key in map) {
    console.log(key);
    
}