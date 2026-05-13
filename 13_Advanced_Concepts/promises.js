const promisOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network calls
    setTimeout(() => {
        console.log('Async Task is completed');
        resolve();
    }, 1000);
});

promisOne.then(function () {
    console.log('Promise Consumed');
});


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task 2');
        resolve();
    }, 1000);
}).then(() => {
    console.log('Promise 2 Consumed');
});

const promisThree = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve({
            userName: 'Tariq',
            email: 'tariq@mail.com'
        });
    }, 1000)
});

promisThree.then((user) => {
    console.log(user); //{ userName: 'Tariq', email: 'tariq@mail.com' }
});

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({
                userName: 'Tariq',
                password: '123'
            })
        }else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour.then((user) => {
    console.log(user);
    return user.userName;
}).then((userName) => { //chaining
    console.log(userName);
}).catch((err) => {
    console.log(err);
}).finally(() => console.log('The promise is either resolved or rejected'));


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({
                userName: 'Tariq',
                password: '123'
            })
        }else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    }catch (err) {
        console.log(err);   
    }
}
consumePromiseFive();


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/tariqsohail1110');
//         const data = await response.json();
//         console.log(data);
//     }catch(err) {
//         console.log(err);
//     }
// }

// getAllUsers();


fetch('https://api.github.com/users/tariqsohail1110')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log('Another way');
    console.log(data);
}).catch((err) => {
    console.log(err);
})