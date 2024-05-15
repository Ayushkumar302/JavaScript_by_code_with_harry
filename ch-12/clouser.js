// // clouser
// A closure is the combination of a function bundled together (enclosed)
// with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript,
//  closures are created every time a function is created, at function creation time.

// message = "good morning global"

// function helloOne() {
//   let  message = "good morning"
//     {
//        let message="good afternoon"
//         console.log("hello One : ", message) ;
//     }
//     // console.log(message);
//    let c =  function helloTwo(params) {
//         console.log("I am C", message);
//     }
//     return c
// }
// c = helloOne()
// helloOne()

// message = "good global"

// function helloOne() {
//   let  message = "good morning"
//     console.log("hello One : ", message) ;

//    let c =  function helloTwo(params) {
//         console.log("I am C", message);
//     }
//     return c
// }
// c = helloOne()
// c()

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  name = "john";
  return displayName;
}
let c = init();
c();
