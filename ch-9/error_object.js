// error object
// An error object is an instance of the Error class provided by JavaScript, representing a runtime error with a message and a stack trace.
//properties of error object
// name
// message
// stack

//custom error
// A custom error is a user-defined subclass of Error, allowing for specialized error handling with custom properties and behaviors.

// try {
//   john;
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// try {
//     console.log(john);
//     throw new ReferenceError("john is not good")

// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

try {
  let age = prompt("enter your age");
  age = Number.parseInt(age);
  if (age > 150) {
    throw new ReferenceError("Invalid age");
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

console.log("script is still running");
