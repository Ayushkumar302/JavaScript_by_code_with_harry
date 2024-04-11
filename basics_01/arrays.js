// explain array in js 
// 1. Array is a collection of items that are stored together in a container. It can    
//    hold values of different data types such as numbers, strings, objects etc.    
// 2. In JavaScript, arrays are created using square brackets [] and each element    
//    is separated by commas.

let arr = [12,"hii",true , null]
console.log(arr)
console.log(typeof arr);   // object

console.log(arr[0]);      // 12
console.log(arr[1])      // "hii"

// Accessing an out-of-bound index will give 'undefined'
console.log(arr[5]); // undefined

console.log(arr.length); // 4

arr[3]=false; // we can add new value to the array
console.log(arr);    // [12, 'hii', true, false, undefined, 4]

// We can also use methods provided by JS for array
// Methods: push(), pop(), shift(), unshift()

arr.push("hello"); // adds "hello" at last
console.log(arr);  // [12, 'hii', true, false, undefined, 4, 'hello']

let removedElement=arr.pop(); // removes and returns the last element
console.log(removedElement);// 'hello'
console.log(arr); // [12, 'hii', true, false, undefined, 4 ]

 let firstElement=arr.shift(); // removes and returns the first element
 console.log(firstElement); //  12
 console.log(arr); // ['hii', true, false, undefined, 4]


//  for (let i = 0; i < arr.length; i++) {
 
//    console.log(arr[i]);
    
//  }