// que 1
// let age = prompt('enter age')
//  if (age>10 && age<20) {
//     console.log("valid age");
// }
// else{
//     console.log("not valid");
// }

// que 2
let num = prompt("Enter a number");

if (num % 2 === 0 && num % 3 === 0) {
  console.log(num, "is divisible by both 2 and 3");
} else if (num % 2 === 0) {
  console.log(num, "is divisible only by 2");
} else if (num % 3 === 0) {
  console.log(num, "is divisible only by 3");
} else {
  console.log(num, "is not divisible by 2 and 3");
}

// que 3 by ternary op 
let marks = 20;
let result = (marks > 10) ? 'yes' : 'no';
console.log(result); //  yes
console.log(marks); //  20
