function setUserName(userName) {
    //complex DB calls
    this.userName = userName;
    console.log(('called'));
    
}

function createUser(userName, email, password) {
    // setUserName.call(userName); // without call createUser { email: 'tariq@mail.com', password: '123' }, the values will be discarded due to the EC will be discarded, but call still doesn't return the values 
    setUserName.call(this, userName); /*createUser {
                                            userName: 'Tariq',
                                            email: 'tariq@mail.com',
                                            password: '123'
                                        }
                                        */
    this.email = email;
    this.password = password;
}

const newUser = new createUser('Tariq', 'tariq@mail.com', '123');
console.log(newUser);
