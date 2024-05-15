//IIFE stands for
//Immediately Invoked Function Expression
/*
An IIFE (Immediately Invoked Function Expression) in JavaScript is like a function that runs as soon as it's defined. It's used to create a private scope for variables, which helps avoid naming conflicts and keeps the global scope clean.

Here's a basic example:

javascript
Copy code
(function() {
  var message = "Hello, IIFE!";
  console.log(message);
})();
In this code:

(function() { ... }) defines an anonymous function.
var message = "Hello, IIFE!"; declares a variable message inside the function.
console.log(message); logs the message to the console.
() immediately invokes (runs) the function after it's defined.
The main purpose of using an IIFE is to encapsulate code and variables, preventing them from affecting other parts of your program. It's a simple way to maintain clean and modular JavaScript code.
 */

let a = () => {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(35);
    }, 4000);
  });
};

// let f = async () => {

//   let b = await a();
//   console.log(b);

//   let c = await a();
//   console.log(c);

//   let d = await a();
//   console.log(d);
// };
// f();


//IIFE

( async () => {

  let b = await a();
  console.log(b);

  let c = await a();
  console.log(c);

  let d = await a();
  console.log(d);
})()

console.log(d);// d is not defined coz not for global scope