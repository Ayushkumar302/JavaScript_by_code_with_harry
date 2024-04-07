// funtions in js 
//A JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it). 

// function declaration
// function myfunc(params) {
//     code
// }

// function program using params
function greetUser() {
    console.log("Hello, User!");
}
greetUser();

// calling the function with arguments
function showMessage(name, message) {
    console.log(message,name);
}
showMessage('John', 'How are you?');

// returning values from functions
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(2, 3));


//arrow function
const square = x => x * x;
console.log(square(5));

const hello = ()=>{
    console.log("hii, how are you");
}
hello();