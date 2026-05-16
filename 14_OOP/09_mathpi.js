const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);


// const myNewObject = Object.create(null); //factory method

// console.log(Math.PI);

const item = {
    name: 'shoes',
    price: '4500',
    isAvailable: 'ture',

    orderItem: function() {
        console.log('Unavailable!');
        
    }
}

console.log(Object.getOwnPropertyDescriptor(item, 'name'));

Object.defineProperty(item, 'name', {
    // writable: false,
    enumerable: true,
    // configurable: false
})

// console.log(Object.getOwnPropertyDescriptor(item, 'name'));
for (let [key, value] of Object.entries(item)) { 
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);    
    }
    // console.log(`${key} : ${value}`);
} // by default object is not iterable, so Object.entries(), helps us to make it iterable