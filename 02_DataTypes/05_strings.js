let myName = "Tariq";
let myAge = 20;

console.log(`Hello, My name is ${myName}, and my age is ${myAge}`);
//Back ticks (``) used for string interpolation (string formatting in Python)

const userName = new String("spike-noob-1110");

//String methods
console.log(userName[0]); //s
console.log(userName.__proto__); //{}
console.log(userName.length); //15
console.log(userName.toUpperCase()); //SPIKE-NOOB-1110
console.log(userName.charAt(4)); //e
console.log(userName.indexOf('e')); //4
console.log(userName.substring(6, 10)); //noob (doesn't accept -ve index)
console.log(userName.slice(0, 5)); //spike (accepts -ve index)
console.log(userName.slice(-13, 5)); //ike (accepts -ve index)

//whitespace methods
let stringWithWhitespaces = "    Hello   ";
console.log(stringWithWhitespaces); //(   Hello   )
console.log(stringWithWhitespaces.trim()); //(Hello)
console.log(stringWithWhitespaces.trimStart()); //(Hello    )
console.log(stringWithWhitespaces.trimEnd()); //(   Hello)

//replace and include
let sentence = "Mangoes are on the Table";
console.log(sentence); //Mangoes are on the Table
console.log(sentence.replace("Mangoes", "Grapes")); //Grapes are on the Table
console.log(sentence.includes("Bananas")); //false

//split and join
console.log(userName.split("-")); //[ 'spike', 'noob', '1110' ]
let sentenceArray = ["Hello", "my", "name", "is", "Tariq"];
console.log(sentenceArray.join(" ")); //Hello my name is Tariq

console.log(userName.at(6)); //n
console.log(userName.charCodeAt(6)); //110
console.log(userName.codePointAt(6)); //110
console.log(userName.substr(6, 4)); //noob (start=6, length=4)
console.log(userName.lastIndexOf("b")); //9
console.log(userName.startsWith("s")); //true
console.log(userName.endsWith("0")); //true 
console.log(userName.concat(" Hello")); //spike-noob-1110 Hello
console.log(userName.repeat(2)); //spike-noob-1110spike-noob-1110