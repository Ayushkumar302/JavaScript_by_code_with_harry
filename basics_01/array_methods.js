// array methods

let arr1 = [1, 2, 3, 34, 4];

console.log(arr1.toString());//converts all elements of the array  to a string and returns it as a single string

let arr2 = arr1.join('_')
console.log(arr2);


arr1.pop()
console.log(arr1);// remove the last element of an array 
 arr1.push(23)
console.log(arr1);

arr1.shift();
console.log(arr1);//remove the first element from an array
arr1.unshift(50);
console.log(arr1);//add to the beginning of an array , return new array length


//delete methode
let arr3= [12,34,23,65,78,45];
delete arr3[3]// delete is an operator not a method 
console.log(arr3);
console.log(arr3.length);//6 length remain same

//concat
let arr4=[9,8,7];
let arr5=[1,2,3];
let result=arr4.concat(arr5); // returns new array   does not change original arrays

// let arr6 = [123,435,325,345,5667,353]
// let result=arr4.concat(arr5,arr6); // returns new array   does not change original arrays
console.log(result);


// sort 
let colors = ['red', 'green', 'blue'];
colors.sort();//  sorts in alphabetical order
console.log(colors);

// reverse
numbers = [1, 2,  3, 4, 5];
numbers.reverse();
console.log(numbers);


// *********splice and slice************

//splice  - used to   add or remove elements from an array at a specified  position
/* splice(start index, how many items to remove, item1 to insert,item2 to insert .....) */

let num = [233,45,3334,2,45,56,86,96,45,345]
num.splice(2,4,"hiii") // removes 4 elements starting from index  2 (indexes start from 0)
console.log(num);
// let num = [233,45,3334,2,45,56,86,96,45,345]
// let deleted = num.splice(2,4,"hiii") // removes 4 elements starting from index  2 (indexes start from 0)
// console.log(deleted);

//slice - used to extract parts of an array into a new array , without changing the original  array
/* slicing syntax: arr.slice(beginning index, ending index )*/
let fruits = ["apple", "banana","cherry","date"];
let citrus = fruits.slice(1,3); // gives ["banana","cherry"] does not include 3
console.log(citrus);