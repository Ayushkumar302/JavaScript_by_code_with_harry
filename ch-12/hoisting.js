//hoisting
/* 
Hoisting in JavaScript is a mechanism where variable and function declarations are moved to the top of their containing scope during the code execution process. This means:

Variable declarations (var) are hoisted, meaning the variable is recognized throughout its scope but is initially undefined until assigned a value.
Function declarations are fully hoisted, allowing you to call a function before its declaration in the code.
Understanding hoisting helps in avoiding unexpected behavior and writing clearer code.

*/

console.log(a);
greet()
function greet() {
    console.log("Good Morning");
}
// var a;//undefined
var a = 9 ; // undefined until th value is asgined , decaration is hoisted to the top

// let a= 9 ; error Cannot access 'b' before initialization
console.log(a);//9


// hello()// functions expressions  are not hoisted
// const hello = ()=>{
//     console.log("Hello World");
// }

hii()// functions expressions  are not hoisted
var hii = function(){
    console.log("Hello World");
}