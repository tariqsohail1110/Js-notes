// const fbUser = new Object(); //--> Singleton

const fbUser = {
    username: {
        name: 'Tariq',
        fullname: {
            firstname: 'Muhammad',
            lastname: 'Tariq',
        },
    },
    email: 'tariq@mail.com'
};

// console.log(fbUser.username.fullname.firstname);

//Merging objects

const ob1 = {a: '1', b: '2'};
const ob2 = {c: '3', d: '4'};
const ob3 = {d: '5', e: '6'};

const mergedOb = Object.assign({}/* --> target*/, ob1, ob2, ob3); //Object.assign(target, source)
console.log(mergedOb); //{ a: '1', b: '2', c: '3', d: '5', e: '6' }

//A better approach (spread operators)

const mergedOb2 = {...ob1, ...ob2, ...ob3};
console.log(mergedOb2); //{ a: '1', b: '2', c: '3', d: '5', e: '6' }

//
const JsUser = {};
JsUser.id = '123abc';
JsUser.name = 'Tariq';
JsUser.email = 'tariq@mail.com';

console.log('JsUser',JsUser); //JsUser { id: '123abc', name: 'Tariq', email: 'tariq@mail.com' }
console.log('JsUser.keys',Object.keys(JsUser)); //JsUser.keys [ 'id', 'name', 'email' ]
console.log('JsUser.values',Object.values(JsUser)); //JsUser.values [ '123abc', 'Tariq', 'tariq@mail.com' ]
console.log('JsUser.entries',Object.entries(JsUser)); /*JsUser.entries [
  [ 'id', '123abc' ],
  [ 'name', 'Tariq' ],
  [ 'email', 'tariq@mail.com' ]
]
*/
console.log(JsUser.hasOwnProperty('email')); // true

//array of objects
const Users = [
    {
        id: 1,
        email: 'user1@mail.com'
    },
    {
        id: 2,
        email: 'user2@mail.com'
    },
    {
        id: 3,
        email: 'user3@mail.com'
    }
]

console.log(Users[1].email);