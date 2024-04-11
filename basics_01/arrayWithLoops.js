// arrays with loops

let arr = [3,54,1,3,5]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);// prints all element
// }

//for each loop
arr.forEach(element => {
    console.log(element*element);
});

/*
*********array.from***********
used to  create a new array from an iterable object like  : array , string or map .
 */
let n = 'john doe'
let  nameArr = Array.from(n)
console.log(nameArr);

//for of -   used to iterate over values in array not index
for (const i of arr) {
    console.log(i);
}
console.log("*********");
//for in  - it will iterate over the property not the value
for (const i in arr) {
    // console.log(i);//   prints indexes
    console.log(arr[i]);
}


