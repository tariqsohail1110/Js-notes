const user = { //Object Literal
    userName: 'Tariq',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log('Got User details from DB');
    }
};

console.log(user['userName']);
console.log(user.getUserDetails());

// Constructor function
// const promisOne = new Promise();
// const date = new Date();

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings =  function() {
        console.log(`Welcome ${this.userName}`);
        
    }

    return this; // not necessary, still return the values if not used
}

// const userOne = User('Tariq', 12, true);
// const userTwo = User('Muhammad', 11, false); // this overrided userOne


const userOne = new User('Tariq', 12, true);
const userTwo = new User('Muhammad', 11, false); // new keyword resolved the issue
console.log(userOne.constructor); // [Function: User]
// console.log(userTwo);

console.log(userOne instanceof User); //true

