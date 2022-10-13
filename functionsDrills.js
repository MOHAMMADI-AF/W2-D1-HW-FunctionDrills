/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */

function sayHello(message) { // This is a basic function that consoles a message that could be seen in some browser console  
  console.log(message);
}
sayHello('Hello World') // To call the function the name of the function should be typed with the parameters in the (bracket) 


/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */

function print(message) {
  console.log(`Title of this question is: ${message}`) // the console.log will print the predefined string followed by the message in function parameters, the ${} is functioning same as concatenation 
}
print('Prompt 2');

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */

const printMessage = function (message) { //
  let newMessage = "Today's message is:" + " " + message //the (+ " " +) is used to add space after (:) 
  console.log(newMessage)
}
printMessage('I am trying hard to learn function in JavaScript')


/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
function multiplyToThePowerOf(a) { //adding a name to the function that could be informative 
  return a ** 2 //any value given to the fun
}
let newValue = multiplyToThePowerOf(10); // creates a new variable from a function 
console.log(newValue);

/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */

function reverseMessage(message5) {
  return message5.split('').reverse().join('')
}
console.log(reverseMessage('Prompt 5'))

/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */
function multiply(a, b) {
  if (b === undefined) {
    b = 2;
  }
  console.log(a * b);
}
multiply(4,)
/*
 * Prompt 7:
 *
 * Fix the following code. HINT: Think Objects :)
 */

/** Starter Code */
// function makePerson(firstname, lastname) {
//   firstname: firstname,
//     lastname: lastname
// }

// const zakk = makePerson('Zakk', 'F')
// const jimmy = makePerson('Jimmy', 'B')

function makePerson(firstname, lastname) {

  var Object = {
    firstname: firstname,
    lastname: lastname
  }
  return Object;
}
const zakk = makePerson('Zakk', 'F')
const jimmy = makePerson('Jimmy', 'B')

console.log(zakk);
console.log(jimmy);

/*
 * Prompt 8:
 *
 * Write a function that returns an object. The object can be anything.
 */
function returnObject() {

  var Object2 = {
    Brand: 'BMW',
    Model: 'X8',
    year: 2022
  }
  return Object2;
}

var myCar = returnObject();
console.log(myCar);

/*
 * Prompt 9:
 *
 * Write a function that returns an array. The array can be of anything.
 */
function arrayOfDataTypeInJs() {
  var results = [];
  for (var i = 0; i < arguments.length; i++) {
    results.push(arguments[i]);
  }
  return results;
}
var jsDataType = arrayOfDataTypeInJs('String', 'Number', 'Boolean', 'Symbol', 'BigInt', 'Null', 'Undefined');
console.log(jsDataType);

/*
 * Prompt 10:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Starter Code */
// let sum = 0

function adds() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(adds(1, 2));

/*
 * Prompt 11:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */
function sum(input) {

  if (toString.call(input) !== "[object Array]") // 
    return false;

  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
}
console.log(sum([1, 2, 3]));
console.log(sum([100, 200, 3]));
console.log(sum([1, 2, 'a', 3]));

/*
 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */

// Given a word, "getAllLetters" returns an array containing every character in the word.
// Note * if given an empty string, it should return an empty array.

function getAllLetters(str) {
  if (str === '') {               // If arguments is blank
    return [];                  // return an empty array
  }
  return str.split('');           // Else, split string using the split() method, which returns an array
}
//var output = getAllLetters('Prompt 12')+'.'; // this will print the array in one line as P,r,o,m,p,t, ,1,2.
var output = getAllLetters('Prompt 12');

console.log(output); // --> ['P', 'r', 'o', 'm', 'p', 't', ' ', '1', '2'] array will be printed in mulitiple  line 

/*
 * Prompt 13:
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

/** Starter Code */
// testFunc()()

let printString = function (text) {  //this is a function expression  
  return text
}
let result = printString('This Works!');
console.log(result)

/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
function add(a, b) { //this function contains virables 
  return a + b // the virable is added in inside the function block 
}
console.log(add(2, 4))

/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */

var showMessage = function () { //in javaScript, a function can have one or more inner functions these nested functions are in the scope of outer function. 

};
function sayHello(message) {
  console.log(message);
}
sayHello('Hello World')

