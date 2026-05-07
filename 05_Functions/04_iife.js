//Immediately Invoked Function Expression

(function connectDB () { //named IIFE
    console.log('Database Connected Successfully');
}) (); //it is used to invoke the function immediately, as well as to remove pollution form the global scope variables. (semi colon : is necessary to add in the end to limit the context)

( (tableName) => { //unnamed IIFE
    console.log(`${tableName} table initialized`);
}) ('Users'); // --> parameterized IIFE 