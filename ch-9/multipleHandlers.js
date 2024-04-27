// Attaching multiple handlers to a promise
/* 
Attaching multiple handlers to a promise refers to the ability to use multiple .then() or .catch() methods on a single promise in JavaScript. This technique allows you to specify different actions to take based on whether the promise resolves successfully or encounters an error.


 */

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    alert("hey I'm not resolved");
    resolve(30);
  }, 2000);
}).then((value) => {
  console.log("Congrats , I am resolved successfully");
});
p1.then(() => {
  console.log("Hurrayy");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 5000);
  }).then((value) => {
    console.log(value);
  });
});
