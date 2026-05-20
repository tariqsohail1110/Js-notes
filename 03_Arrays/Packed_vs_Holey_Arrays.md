# Arrays In JavaScript

## Types of Arrays in JS
- Continuous (PACKED)
- Holey (gap at any index)

### Types of array optimization in JS

Arrays have different types of optimization based on the elements they have

- SMI(small integer)
- Packed element
- Double (float, sting, function)

##  Example 1

```JavaScript
const arrTwo = [1, 2, 3, 4, 5];
// PACKED_SMI_ELEMENTS (best elements)

arrTwo.push(6.0);
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7');
// PACKED_ELEMENTS

// default is packed SMI, then it is converted to other type, but can't be reverted then

arrTwo[10] = 11;
// Now it has converted to HOLEY_ELEMENTS, as we have multiple types of elements and also it has gap between them

console.log(arrTwo);
console.log(arrTwo.length); 
console.log(arrTwo[9]); // will give undefined, and it is a costly operation, as it is not out of bound
//following steps will be taken
// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.protptype, 10) => these check are expensive in JS

// holes are very expensive, better to avoid them
```

## Example Two

```JavaScript
const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[8]); //out of bound
console.log(arrThree[2]); // 3
```

### Optimization Order

- SMI > DOUBLE > PACKED
- HOLE_SMI > HOLE_DOUBLE > HOLE_PACKED

## Example Three

```JavaScript
const arrFour = new Array(3);
// just three hole, HOLEY_SMI_ELEMENTS

arrFour[0] = '1'; //HOLEY_ELEMENTS, it is downgraded
arrFour[1] = '2';
arrFour[2] = '3';

// A better approach

const arrFive = []; // SMI (the most optimized version)
arrFive.push('1'); // PACKED_ELEMENTS
arrFive.push('2');
arrFive.push('3');
```

## Example Four

```JavaScript
const arrSix = [1, 2, 3, 4, 5]; //SMI
arrSix.push(Nan); //Now it is PACKED_DOUBLE
arrSix.push(Infinity);

// always use array methods as they are more optimized
// for, for-of, forEach
```