// promises are used to handle asynchronous operations in js.
// used for parallel execution
// A Promise is an object representing the eventual completion (or failure) of an asynchronous task, and it allows you to work with asynchronous code in a more structured and manageable manner compared to traditional callback-based approaches.

// Promise States:
// A Promise can be in one of three states
// Pending: Initial state, before the operation completes or fails.

// Fulfilled (Resolved): The operation completed successfully, and the promise has a resolved value.

// Rejected: The operation failed, and the promise has a reason for the failure (typically an error object). k

// let promise = new Promise((resolve, reject) => {
//     alert("hello promise")
//   resolve(56);
// });

// console.log("hello One");

// setTimeout(() => {
//   console.log("hello two in 2 second");
// }, 2000);

// console.log("hello Three");
// console.log(promise);


//************promise methods************
 
// .then() :  method is used to handle the promise. It takes two arguments, 
// a callback for the success case and another for the failure case.

// .catch() The .catch() method is used to handle the rejection (failure) of a Promise. It takes one callback function as an argument:
// The callback function passed to .catch() is called when the Promise is rejected, meaning an error occurred during the asynchronous operation.


// let p = new Promise((resolve, reject) => {
//     console.log("promise is pending");
//     setTimeout(() => {
//         console.log("i am a promise an i am fullfilled")
//         resolve(true)
//     }, 3000);
// })
// console.log(p);


// let p = new Promise((resolve, reject) => {
//     console.log("promise is pending");
//     setTimeout(() => {
//         console.log("i am a promise an i am reject")
//         // resolve(true)
//         reject(new Error("i am a error"))
//     }, 3000);
// })
// console.log(p);




let p1 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        console.log("i am a promise an i am fullfilled")
        resolve(true)
    }, 3000);
})


let p2 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        console.log("i am a promise an i am rejected")
        // resolve(true)
        reject(new Error("i am a error"))
    }, 3000);
})

// console.log(p1,p2);

p1.then((value) =>{
    console.log(value);
})

p2.catch((error)=>{
    console.log("solved error of p2");
})