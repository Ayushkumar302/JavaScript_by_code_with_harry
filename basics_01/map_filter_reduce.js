//higher order array methods
//map, filter and reduce
//are higher-order functions. They take in a  function as an argument to manipulate the elements of an array.

// **********map()*************
//map() method : returns a new array by perfoming some operation
//on each element of the calling array
//Map: takes in a callback function that is applied on each element of the array and returns

let arr = [45, 49, 52];
let a = arr.map((x, index) => {
  console.log(x, index);
  // console.log(x , index , array);
  return x + index;
});
console.log(a);

// ********filter()*************
//The filter() method creates a new array
//with all elements that pass the test implemented by the provided testing function.
//It does not modify the existing array . It only returns the values that satisfy the condition specified by the callback function.

let arr2 = [45, 23, 21, 0, 3, 5];
let b = arr2.filter((a) => {
  return a < 10; // if true then include it into the new array
});
console.log(b);

// let fruits = ["apple", "banana", "cherry", "mango"];
// let b = fruits.filter((value) => value === "banana");
// console.log("Filtered Array: ", b);

//*******reduce()****** */
/* The reduce() method applies a reducer function
to each element of the array, resulting in single
output value. 
It takes two arguments - A callback function reduces the values of an array to a single output
Value is accumulated in the accumulator parameter previousValue which gets updated with each iteration*/

let arr3 = [1, 2, 3, 4, 5];
let c = arr3.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log(c);
