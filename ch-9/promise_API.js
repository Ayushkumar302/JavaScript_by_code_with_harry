// promise API -
/*
The Promise API in JavaScript provides a way to work with asynchronous operations and manage asynchronous code more effectively. Promises simplify the handling of asynchronous tasks and help avoid "callback hell" by allowing you to chain operations using .then() and .catch() methods.


6 methods  - 
    promise.all() -   means all the promises are resolved
    promise.race() - means the first promise is resolved this
    promise.resolve() -  means the promise is resolved this  method is used to execute the code after the promise is resolved
    promise.reject() - means the promise is rejected this  method is used to execute the code after the promise is rejected
    promise.finally() - means the promise is finally resolved this  method is used to execute the code after the promise is resolved or rejected
    promise.allSettled() - this method is used to check if all the promises are resolved or not 
    promise.any()- means the first promise is resolved this  method is used to execute the code after the promise is resolved
    */

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 1");
  }, 11000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("value 2");
    reject(new Error("error"))
  }, 2000);
})
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 3");
  }, 3000);
});

// p1.then((value) => {
//   console.log(value);
// });

// p2.then((value) => {
//   console.log(value);
// });

// p3.then((value) => {
//   console.log(value);
// });

// when all the promises are resolved then we can use promise.all() method to get values of all the promises
// let promiseAll = Promise.all([p1,p2,p3]) // gives the value of all the promises , any promise got reject thw whole promise.all dont get resolved
// let promiseAll = Promise.allSettled([p1,p2,p3])// retuns the value of all the promises , even if any promise got reject the promise.allSettled get resolved
let promiseAll = Promise.allSettled([p1,p2,p3])
promiseAll.then((value) => {
  console.log(value);
});


// let promiseAll = Promise.race([p1,p2,p3])
// promiseAll.then((value) => {
//   console.log(value);
// });


// let promiseAll = Promise.any([p1,p2,p3])
// promiseAll.then((value) => {
//   console.log(value);
// });
