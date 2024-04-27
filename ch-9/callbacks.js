// synchronous : means that the code will execute line by line.
// , means that the function will return a value.
// let a = prompt("your name?") ;
// let b = prompt("your age?") ;
// console.log(a,b);



// Asynchronous :   means that while one part of the code is executing, the rest of the 
// code can continue to run without waiting for the asynchronous operation to complete.
//  , means that the function will return a promise.
 
// console.log("start");

// setTimeout(() => {
//     console.log("hey i am good");
//  }, 3000);

// console.log("end");


//>>>>>>>>> CALLBACKS <<<<<<<<<
// Callbacks are functions that are passed to other functions as arguments.
// function myFunc(callback){
//     console.log("hello world");
//     callback();
// }

// myFunc(function(){
//     console.log("hello world");
// });

function hello() {
    console.log("hello");
}
function hii() {
    console.log("hii");
}

function add(num1,num2,callback) {
    // hello();
    console.log(num1+num2);
    callback()
}
let a=10
let b = 20
add(a,b , hello)
add(20,90 , hii)


// Asynchronous function that simulates data fetching
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { id: 1, name: 'John Doe' };
//         callback(null, data); // Call the callback with data
//     }, 2000);
// }

// // Usage: Pass a callback function to handle the fetched data
// fetchData((error, result) => {
//     if (error) {
//         console.error('Error:', error);
//     } else {
//         console.log('Fetched Data:', result);
//     }
// });
