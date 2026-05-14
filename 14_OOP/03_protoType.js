let myName = 'Tariq     ';

// console.log(myName.trim().length); // this works, but it is hectic, if we have to apply it on multiple strings

// console.log(myName.trueLength());

let myHero = ['thor', 'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function() {
        console.log(`Spidy's power is ${this.spiderman}`);
    }
}

Object.prototype.tariq = function() {
    console.log(`Tariq is present in all objects`);
} // this property has been added to all, as JS passes everything through objects

Array.prototype.helloWorld = function() {
    console.log(`Hello World!`);
    
}

// heroPower.tariq(); // Tariq is present in all objects
// myHero.tariq(); // Tariq is present in all objects

myHero.helloWorld(); // Hello World!
// heroPower.helloWorld(); // TypeError: heroPower.helloWorld is not a function

// +++++++++++++++++++++++++++ Inheritance or Prototypal Inheritance+++++++++++++++++++++++++++

const User = {
    name: 'Tariq',
    email: 'tariq@mail.com'
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvaiable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = User;

// this one is old school

//modern practice

Object.setPrototypeOf(teachingSupport, teacher); //this is same as __proto__

let anotherUserName = 'Muhammad     ';

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength();
myName.trueLength();
