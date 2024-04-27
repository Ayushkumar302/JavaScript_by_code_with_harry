// promises are used to handle asynchronous operations in js.
// used for parallel execution
// A Promise is an object representing the eventual completion (or failure) of an asynchronous task, and it allows you to work with asynchronous code in a more structured and manageable manner compared to traditional callback-based approaches.

// Promise States:
// A Promise can be in one of three states
// Pending: Initial state, before the operation completes or fails.

// Fulfilled (Resolved): The operation completed successfully, and the promise has a resolved value.

// Rejected: The operation failed, and the promise has a reason for the failure (typically an error object). k

let promise = new Promise((resolve, reject) => {
    alert("hello promise")
  resolve(56);
});

console.log("hello One");

setTimeout(() => {
  console.log("hello two in 2 second");
}, 2000);

console.log("hello Three");
console.log(promise);
