# JavaScript Coursework - Complete Learning Guide

A comprehensive JavaScript learning repository covering fundamental concepts, DOM manipulation, Object-Oriented Programming, and practical projects.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Topics Covered](#topics-covered)
- [Projects](#projects)
- [Getting Started](#getting-started)
- [Learning Path](#learning-path)

---

## Overview

This coursework is a structured learning journey through JavaScript, starting from basic fundamentals and progressing to advanced concepts. It includes:

- **15 Learning Modules** with practical examples and code demonstrations
- **6 Interactive Projects** to apply knowledge
- **Fundamental Concepts** from variables to closures and lexical scoping
- **DOM Manipulation** examples and techniques
- **Object-Oriented Programming** principles and patterns
- **Advanced Topics** including Promises and API requests

---

## Project Structure

```
JS_Coursework/
├── 01_Variables/                  # Variable declaration and scope basics
├── 02_DataTypes/                  # Data types and type conversions
├── 03_Arrays/                     # Array manipulation and methods
├── 04_Objects/                    # Object creation and manipulation
├── 05_Functions/                  # Function declarations, arrow functions, IIFE
├── 06_Scopes/                     # Variable scope and hoisting
├── 07_Call_Stack/                 # Call stack execution and understanding
├── 08_Control_Flow/               # If/else, switch statements, truthy/falsy
├── 09_Iterations/                 # For loops, while loops, forEach, map, filter, reduce
├── 10_DOM/                        # DOM manipulation and selection
├── 11_Projects/                   # Practical projects
│   ├── 01-color-changer/
│   ├── 02-bmi-calculator/
│   ├── 03-digital-clock/
│   ├── 04-guess-the-number/
│   ├── 05-keyboard-check/
│   └── 06-unlimited-colors/
├── 12_Events/                     # Event handling and listeners
├── 13_Advanced_Concepts/          # Promises and API requests
├── 14_OOP/                        # Object-Oriented Programming
├── 15_Closure_&_Lexical_Scoping/ # Closures and lexical scoping
└── README.md
```

---

## Topics Covered

### 01_Variables
Learn about variable declaration with `const`, `let`, and `var`, understanding the differences and best practices.
- Constant declaration
- Block-scoped vs function-scoped variables
- Hoisting behavior
- Variable reassignment

### 02_DataTypes
Explore JavaScript's fundamental data types and type conversions.
- Primitives: String, Number, Boolean, Null, Undefined, Symbol
- Type conversions and coercions
- Data type operations
- Comparison operators
- String manipulation
- Number and Math methods
- Stack vs Heap memory model

### 03_Arrays
Master array manipulation and array methods.
- Array declaration and access
- Array methods: push, pop, shift, unshift
- Array iteration and manipulation
- Common array operations

### 04_Objects
Understand object creation and manipulation.
- Object literals
- Property access and modification
- Methods within objects
- Object-oriented basics

### 05_Functions
Deep dive into functions and their variations.
- Function declarations
- Function expressions
- Arrow functions
- Immediately Invoked Function Expressions (IIFE)
- Parameters and return values
- Scope inside functions

### 06_Scopes
Understand variable scoping and hoisting.
- Global scope
- Function scope
- Block scope
- Lexical scope
- Variable hoisting with `var`, `let`, `const`

### 07_Call_Stack
Visualize how JavaScript executes code.
- Call stack mechanics
- Function execution order
- Recursive calls

### 08_Control_Flow
Master decision-making in code.
- If/else statements
- Switch statements
- Ternary operators
- Truthy and falsy values

### 09_Iterations
Learn different looping mechanisms and functional methods.
- For loops
- While loops
- Do-while loops
- forEach loops
- Array methods: `map()`, `filter()`, `reduce()`
- Chaining array methods

### 10_DOM
Interact with HTML documents through JavaScript.
- DOM selection (getElementById, querySelector, etc.)
- DOM manipulation
- Dynamic content creation
- Accessing and modifying HTML elements

### 12_Events
Handle user interactions.
- Event listeners
- Event types (click, input, submit, etc.)
- Event handling functions
- Event propagation

### 13_Advanced_Concepts
Explore asynchronous JavaScript patterns.
- **Promises**: Introduction, chaining, error handling
- **Async/Await**: Modern asynchronous code
- **API Requests**: Fetching data from external sources
- DOM event handling with API interactions

### 14_OOP
Master Object-Oriented Programming in JavaScript.
- Object creation patterns
- Constructor functions
- Prototypes and prototype chain
- Classes (ES6)
- Inheritance
- Static properties and methods
- Getter and Setter methods
- The four pillars of OOP:
  - **Abstraction**: Hiding internal details
  - **Encapsulation**: Wrapping data and methods
  - **Inheritance**: Extending properties from parent
  - **Polymorphism**: One function used in multiple ways

### 15_Closure & Lexical Scoping
Advanced function scoping patterns.
- Closures and their practical use cases
- Lexical scope understanding
- Function factories
- Data privacy through closures

---

## Projects

### 01 - Color Scheme Switcher
**Description**: Interactive background color changing application
- **Skills**: DOM manipulation, event listeners, styling
- **Features**: Click colored buttons to change page background
- **Files**: `index.html`, `script.js`, `style.css`

### 02 - BMI Calculator
**Description**: Body Mass Index calculation tool
- **Skills**: Form handling, input validation, calculations
- **Features**: Calculate BMI from height and weight, display weight category
- **Files**: `index.html`, `script.js`, `style.css`

### 03 - Digital Clock
**Description**: Real-time digital clock display
- **Skills**: Date and Time API, DOM updates, setInterval
- **Features**: Display current time in HH:MM:SS format, updates every second
- **Files**: `index.html`, `script.js`

### 04 - Guess the Number
**Description**: Number guessing game with attempts counter
- **Skills**: Random number generation, conditional logic, user feedback
- **Features**: Guess a number between 1-100 with 10 attempts, hints (too high/low)
- **Files**: `index.html`, `script.js`, `style.css`

### 05 - Keyboard Check
**Description**: Keyboard event detector
- **Skills**: Keyboard events, event properties, DOM display
- **Features**: Display which key was pressed and its key code
- **Files**: `index.html`, `script.js`

### 06 - Unlimited Colors
**Description**: Random color generator with background changer
- **Skills**: Random generation, setInterval, color manipulation
- **Features**: Generate and display random hex colors
- **Files**: `index.html`, `script.js`

---

## Getting Started

### Prerequisites
- Node.js installed (for running JavaScript files via terminal)
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- A code editor (VS Code recommended)

### Running JavaScript Files

**In Node.js environment:**
```bash
node 01_Variables/01_variables.js
node 02_DataTypes/02_datatypes.js
node 05_Functions/01_function.js
node 14_OOP/01_oop.js
```

**In Browser (for HTML files):**
- Navigate to any `.html` file in the `10_DOM/`, `12_Events/`, or `11_Projects/` directories
- Open in a web browser
- Use browser developer console (F12) to see console output

### Running Projects
1. Navigate to a project folder (e.g., `11_Projects/01-color-changer/`)
2. Open the `index.html` file in your web browser
3. Interact with the application

---

## Learning Path

### Beginner (Foundation)
1. **01_Variables** - Understand variable declaration and scoping
2. **02_DataTypes** - Learn JavaScript data types
3. **03_Arrays** - Master basic array operations
4. **04_Objects** - Understand objects and their properties
5. **08_Control_Flow** - Learn decision-making with if/else and switch

### Intermediate (Core Concepts)
6. **05_Functions** - Deep dive into functions
7. **06_Scopes** - Understand variable scope and hoisting
8. **07_Call_Stack** - Visualize code execution
9. **09_Iterations** - Master loops and array methods
10. **10_DOM** - Learn DOM manipulation

### Advanced (Professional Patterns)
11. **12_Events** - Handle user interactions
12. **13_Advanced_Concepts** - Promises and asynchronous code
13. **14_OOP** - Object-Oriented Programming patterns
14. **15_Closure_&_Lexical_Scoping** - Advanced function patterns

### Practical Application
- Complete projects **01-06** after reaching intermediate level
- Apply concepts as you learn them

---

## Key Concepts Summary

| Concept | Module | Key Takeaway |
|---------|--------|--------------|
| Variables | 01 | Use `const` by default, `let` for reassignment, avoid `var` |
| Data Types | 02 | Understand primitive vs reference types |
| Arrays | 03, 09 | Master array methods like map, filter, reduce |
| Objects | 04, 14 | Foundation for OOP and complex data structures |
| Functions | 05 | Arrow functions vs regular, understand scope |
| Scope | 06 | Lexical scope, block scope, closure potential |
| Control Flow | 08 | Efficient conditional logic with switch and ternary |
| DOM | 10 | Query, select, and manipulate HTML elements |
| Events | 12 | Handle user interactions efficiently |
| Promises | 13 | Manage asynchronous operations |
| OOP | 14 | Build maintainable, scalable code |
| Closures | 15 | Advanced patterns for data privacy |

---

## Tips for Learning

1. **Run the Code**: Execute every example in the browser console or Node.js
2. **Experiment**: Modify code and see what happens
3. **Take Notes**: Write down key concepts in your own words
4. **Build Projects**: Apply concepts to the provided projects
5. **Read Comments**: Code comments explain the "why" behind examples
6. **Practice Debugging**: Use browser DevTools to debug code
7. **Challenge Yourself**: Modify projects or create variations

---

## Resources

- **MDN Web Docs**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/
- **JavaScript.info**: https://javascript.info/
- **ES6 Features**: https://es6.io/

---

## File Organization Notes

- Each module folder contains practical examples with numbered files
- HTML files can be opened directly in browsers
- JavaScript files can be run via Node.js or browser console
- Projects are self-contained with HTML, CSS, and JS

---

## Author Notes

This coursework demonstrates:
- Progressive difficulty from fundamentals to advanced concepts
- Practical examples in every module
- Real-world project applications
- Best practices and modern JavaScript patterns (ES6+)

---

**Last Updated**: May 2026
**Status**: Comprehensive JavaScript learning resource
