// loops in js
// 1)for loop is used to iterate over a range of values.
// 2)for in loop  is used to iterate over the properties of an object .
//  3)while loop is used when we don't know how many times we need to execute a block of code.
//  4) do while loop is similar to while loop but it executes the block of code at least once before checking the condition.
//  do while loop is similar to while loop but it executes the block of code at least once before checking the condition.

// //for loop
// for (let i = 0; i < 5; i++) {
//   // i = 0 to n-1
//   //  initiailization ; condition for execution ; increment/dec
//   console.log(i);
// }
// console.log("***********");

// // print sum of natural number by for loop
// let sum = 0;
// let n = 12;
// for (let i = 0; i < n; i++) {
//   sum += i + 1;
// }
// console.log(`sum of ${n} natural numbers are :${sum}`);

// //factorial using for loop
// let  num = 6;
// let fact = 1;
// for (let i=1; i<=num; i++){
//     fact *= i;
// }
// console.log("The factorial of ",num," is: ",fact);


// ************** for in loop ****************
let obj = {
    john : 20,
    sam : "hello",
    tom : true

}
for (let a in obj) {
    console.log( a +" : "+obj[a]);
}

// ********for of *********
let b = "hello"
for (let v of b){
    console.log(v);
}