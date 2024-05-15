// Destructuring
// Destructuring in JavaScript is a way to extract values
// from arrays or objects into variables using a concise syntax.
// It allows you to unpack values from arrays or properties from
//  objects into individual variables easily.

let arr = [2, 4, 5, 34, 54, 12];

// let a = arr[0] (no need to do this)
// let b = arr[1] (no need to do this)

//destructuring
// let [a,b,c, ...rest] = arr;
// console.log(a,b,c,rest);

let [a, , , ...rest] = arr; // 2,rest(34,54,12)

console.log(a, rest);

//object destructuring
let obj = {
  name: "John",
  age: 25,
  address: "New York",
};
// let name = obj.name;
// let age = obj.age;
// let address = obj.address;
// console.log(name,age,address);

//destructuring
// let {name,age,address} = obj;
// console.log(name,age,address);

// ********spread operator*********
// spread operator is used to copy the elements of an array or
//  object into another array or object. It is represented by
//  three dots (...) in JavaScript.

// It is used to copy the
//  elements of an array or object into another array or object.

//  It is also used to merge two or more arrays or objects into
//  a single array or object.

//  It is also used to copy the elements of an array or object
//  into another array or object without modifying the original
//  array or object.

let arr1 = [3, 5, 8];
let obj1 = { ...arr1 };
console.log(obj1);

function sum(v1, v2, v3) {
  return v1 + v2 + v3;
}
console.log(sum(...arr1));

let obj2 = {
  name: "John",
  company: "xyz",
  address: "abcd",
};
console.log({ ...obj2, name: "rahul" });//override values 

// console.log({ name: "rahul", ...obj2 });// not override
