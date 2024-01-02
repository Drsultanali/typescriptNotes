"use strict";
//concept of var let and const
/*In Global scope (file.ts) variables with the keyword with let and var can be redeclared,
but const cannot be redeclared like value of PI(3.14);*/
let variable1 = 500;
variable1 = 750;
var variable2 = 600;
variable2 = 360;
const variable3 = 700;
// variable3 = 269;
// In block scope we can delare variable outside the blockScope with the keyword of var only;
{
    let variable4 = 400;
    var variable5 = 800;
    const variable6 = 1000;
}
//console.log(variable1, variable2, variable3);
function positive() {
    let variable7 = 100;
    var variable8 = 200;
    const variable9 = 300;
}
// console.log(variable4, variable5, variable6);
// ==============================================================================================================================
/*Functions are designed to execute code at a specific line where they're called, and they allow us to reuse their value without
rewriting specific lines of code. When code begins with a function declaration, it receives VIP treatment from the compiler.
The compiler checks how many functions are declared in the global scope, storing this information in memory.
This enables us to declare or call a function before the actual code of the function is written.*/
//Function declaration:
function nameOfFunction( /*Parameters:- variable names and their data type */) {
    //function definition (code in this block)
}
//nameOfFunction(arguments: value ):
// for eg:
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
    /*return allows functions to perform operations and provide a result back to the part of the code that invoked/call the function,
    enabling better control and utilization of the function's output within the broader program. Without the return statement,
    functions wouldn't be able to provide calculated values back to the code that invoked them. */
}
let sumResult = sum(10, 30);
sumResult = sumResult + 21; // you can also add another value into teh return by saving return value in a new variable
console.log("sumResult:", sumResult);
// ==============================================================================================================================
//Arrow function declation:
/*To eliminate the special treatment of functions in the global scope, arrow functions can be used. By employing arrow functions,
all code is treated equally.*/
var nameOfArrowFunction = ( /*Parameters*/) => {
    //definition
};
// nameOfArrowFunction(Arguments);
// Arrow function can also de declared as follow:
var sumArrow = (num1, num2) => num1 + num2;
let resultSum = sumArrow(205, 36);
console.log(" resultSum:", resultSum);
//Typescript BUilt in Functions:
/*Built-in functions in TypeScript refer to the functions that are part of the standard JavaScript environment and are available
for use within TypeScript code.*/
/********** Math Functions **********/
// Math.abs(): Returns the absolute value of a number.
// Math.ceil(): Rounds a number up to the nearest integer.
// Math.floor(): Rounds a number down to the nearest integer.
// Math.max(): Returns the largest of zero or more numbers.
// Math.min(): Returns the smallest of zero or more numbers.
// Math.pow(): Returns the base to the exponent power (i.e., base^exponent).
// Math.random(): Returns a pseudo-random number between 0 and 1.
// Math.round(): Rounds a number to the nearest integer.
// Math.sqrt(): Returns the square root of a number.
// Math.trunc(): Returns the integer part of a number by removing any fractional digits.
/********** Array Functions **********/
// map(): Creates a new array by applying a function to each element of the original array.
// filter(): Returns a new array containing elements that meet a condition specified by a provided function.
// reduce(): Reduces an array to a single value by executing a function for each element.
// forEach(): Executes a provided function once for each array element.
// indexOf() / lastIndexOf(): Returns the index of the first/last occurrence of a specified value in an array.
/********** Array Manipulation Functions **********/
// push(): Adds one or more elements to the end of an array and returns the new length of the array.
// pop(): Removes the last element from an array and returns that element.
// shift(): Removes the first element from an array and returns that element, shifting all subsequent elements to a lower index.
// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// splice(): Changes the contents of an array by removing or replacing existing elements and / or adding new elements in place.
/********** String Functions **********/
// join(): Joins all elements of an array into a string.
// includes(): Determines whether an array includes a certain element, returning a boolean value.
// slice(): Returns a shallow copy of a portion of an array into a new array object.
// sort(): Sorts the elements of an array in place and returns the sorted array.
// concat(): Joins two or more arrays and returns a new array.
// reverse(): Reverses the elements of an array in place.
// charAt() / charCodeAt(): Returns a character at a specified index / Unicode value of the character at a specified index in a string.
// trim(): Removes whitespace from both ends of a string.
// toUpperCase() / toLowerCase(): Returns the string converted to upper/lower case.
// startsWith() / endsWith(): Checks if a string starts or ends with a specified string.
// replace(): Replaces a specified value in a string with another value.
// indexOf() / lastIndexOf(): Returns the index of the first/last occurrence of a specified value within a string.
/********** Object Functions **********/
// keys(): Returns an array of a given object's own property names.
// values(): Returns an array of a given object's own enumerable property values.
// entries(): Returns an array of a given object's own enumerable property [key, value] pairs.
// assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
// freeze() / seal(): Freezes an object, making it immutable / Seals an object, preventing new properties from being added.
/********** Number Functions **********/
// toFixed(): Formats a number using fixed-point notation.
// toPrecision(): Formats a number to a specified length.
// toString(): Returns a string representing the specified object (in this case, a number).
// isNaN(): Determines whether a value is NaN (Not-a-Number).
// isFinite(): Determines whether a value is a finite, legal number.
/********** Other Functions **********/
// setTimeout() / setInterval(): Executes a function after a specified delay / Repeatedly executes a function at specified intervals.
// ==============================================================================================================================
//Array:
/*Collection of consecutive ram cells is called array. -OR- Collection of variables is called array. when we make a single variable
it contain/reserve a free cell in RAM. similarly when want to store a number of variables, we make an array, which is collection of
variable under a single name. This array will reserve a amount of cell in RAM as compare to number of variables in array,
whenever we make change in that array (add or delete an variable) it will find sapce in RAM according to cahnge applied.*/
// How to make an array:
let studentsRollNo = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]; // and so on as many you want to store.
let studentNames = ['Ali', 'Musa', 'Karim', 'Afzal', 'Sultan', 'Ammar', 'Humna', 'Hira']; // and so on as many you want to store.
// Whenever you want to print a single variable from array:
//Array index always start from zero 
studentsRollNo[3];
console.log("studentsRollNo[3]:", studentsRollNo[3]);
studentNames[6];
console.log("studentNames:", studentNames[6]);
//you can change a single variable in array as you do in single declared variable and you can see the difference below:
console.log("studentsRollNo:", studentsRollNo); //old array
studentsRollNo[1] = 2000; //changed the 1st-index of array 101 to 2000
console.log("studentsRollNo:", studentsRollNo); //modified array
//string method:
console.log("studentNames:", studentNames); //old array 
studentNames[4] = 'Sheraz'; //changed the 4th-index of array 'Sultan' to 'Sheraz'
console.log("studentNames:", studentNames); //modified array
//You can add single variable from array 
let numVariables = [3600, 5400, 2518, 9825, 6452, 8735, 7234, 1679, 5269];
let sumOfVariables = numVariables[2] + numVariables[5]; //sum of 2nd index 2518 and 5th index 8735
console.log("sumOfVariables:", sumOfVariables);
// You can also add/concatenate strings from array
let strVariables = ['What is your name:', 'Sultan Ali', 'S/o', 'Mubarak Ali'];
let concatOfStr = strVariables[0] + ' ' + strVariables[1] + ' ' + strVariables[2] + ' ' + strVariables[3];
console.log("concatenation of strings", concatOfStr);
//Add delete values from array:
let shoppingList = ['T-shirt', 'Jeans', 'Belt', 'Shoes', 'Waist Coat', 'Tie', 'Socks'];
//If we want to add value at the end of array:
shoppingList.push('After Shave');
//If we want to delete value from end of array:
shoppingList.pop();
//If we want to add value from start:
shoppingList.unshift('Hair Gel');
//If we want to delete value from start:
shoppingList.shift();
//You can console all these values to see the changes.
//We also have a Splice built in function, which perform all the above action by itself and also can add or delete value from center;
/*splice function: this function take three parameters first two are compulsory (0, 0 , Number/string). fist parameter is for index
to start from and second parameter is about how many values should be deleted. The third one is about add value to specific location.*/
let toDoList = ['Get up early in the morning', 'Say Fajar prayer', 'Get shower', 'Do breakfast', 'Take medicine', 'Petrol check', 'Get laptop bag', 'Get Audit 2023 file', 'call to Mr. Mujtaba Anwar', 'Have lunch with Mr Mujtaba'];
//Add value in the end of array and delete zero value
// toDoList.splice(toDoList.length, 0, "Get the Detait of Carlione Project");
//Add value in the start of array and delete 3 first values 
// toDoList.splice(0, 3, 'Book Flight');
//Add value at the center of array and delete nothing
toDoList.splice(toDoList.length / 2, 0, 'Center of Array');
console.log("🚀 ~ file: typescriptNotes.ts:184 ~ toDoList:", toDoList);
//Limitation of array:
/* We can store an unlimited number of variables based on the available space in our RAM. However, if we set a specific limit on
the number of cells or blocks in an array (for example, limiting it to 6 cells), it can create issues. If we attempt to store more
than the specified limit, it will cause an overflow, resulting in the loss of data. Conversely, if we only store a few variables,
the remaining space, say 4 cells in this case, will remain reserved and unused.*/
