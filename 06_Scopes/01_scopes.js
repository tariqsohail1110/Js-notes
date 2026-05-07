let changeableVar = 100; //global scope
// const constantVar = 20;
// var classicVar = 3000; // it is being ignored, that's why we avoid var
 if(true) {
    let changeableVar = 10;
    const constantVar = 20;
    console.log(`INNER: ${changeableVar}`) //block scope
    // var classicVar = 30;
}
console.log(changeableVar); //--> can't call them outside of condition
// console.log(constantVar); //--> can't call them outside of condition
// console.log(classicVar); //But it is being called outside of the scope too

// {} //--> scopes (in functions or condtions, not in objects)

//Global Scopes in Node and browser are different