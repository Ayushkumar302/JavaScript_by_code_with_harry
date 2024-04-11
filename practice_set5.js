// que1) create an array of number and take input from user and add number to this array

// let arr = [1,2,34,55];
// let num = parseInt(prompt("enter number"))
// arr.push(num);
// console.log(arr);

// que2) keep adding number to it until zero is added
// let arr = [1, 2, 34, 55];
// let num;
// do {
//   num = prompt("enter number");
//   num = Number.parseInt(num);
//   arr.push(num);
// } while (num != 0);
// console.log(arr);

//que3) filter number divisible by 10  in the given array
// let arr = [12, 25, 250, 20, 34, 90, 40, 34, 56, 76];
// let b = arr.filter((num) => {
//   return num % 10 == 0;
// });
// console.log(b);

// let arr = [12, 25, 250, 20, 34, 90, 40, 34, 56, 76];
// let b = arr.map((num) => {
//   return num * num;
// });
// console.log(b);


// factorial by reduce 
let arr2 = [1, 2, 3, 4];
let c = arr2.reduce((num1, num2) => {
  return num1 * num2;
});
console.log(c);
