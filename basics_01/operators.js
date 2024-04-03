// Operators in js  
// Arithmetic operators: +, -, *, / 
// Assignment operators: =, +=, -= etc.
// Logical operators: && (and), || (or)
// Comparison operators: ==, !=, >, <, >=, <= , ? 
// Bitwise operators: &, | and ^ for bit manipulation

//Aritmetic operators
let a = 10 
let b = 20
console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b); //  division operator returns the quotient of two numbers
console.log("a ^ b = ",a**b);//  exponentiation operator raises base to the power of  exponent
console.log("a / b = ",a%b); //  gives the remainder of division

 
console.log("++a = ", ++a); // pre increment --before-- //11 | 11 ++ 
console.log("a++ = ",a++); //  post increment --after--  //11  after this it inc
console.log("--a = ", --a); // 11
console.log("a-- = ", a--); // 11
 

//assignment operators
let c = 1
c+=5    // same as  c = c+5; same for c-= , c*= , c/= , c%=
console.log(c);

//comparsion operators
// let comp1 = 5
// let comp2 = 4
// let comp1 = 4
// let comp2 = 4
let comp1 = 4
let comp2 = "4"
console.log("Comp1 == comp2",comp1==comp2); 
console.log("Comp1 != comp2",comp1!=comp2); 

console.log("Comp1 === comp2",comp1===comp2); 
console.log("Comp1 !== comp2",comp1!==comp2); 


//  Logical Operators 
let x = 8 
let y = 6
console.log(x>y && x==8);
console.log(x<y && x==5); //false

console.log(x>=y || x==8);// true return if one condition is true 
console.log(x>=y || x==3);// true

console.log(!false); //true
console.log(!true); // false