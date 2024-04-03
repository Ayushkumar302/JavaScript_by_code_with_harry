/* variables in javascript 
 Variables are used to store values that can be reused throughout the code.

*/

const accountId = 1223 //    constant variable, cannot change its value once assigned , can't be changed
//   memoryname = assinged value
let accountEmail =   "john@doe.com"  //      let is a block scope variable, it's local to the current file (or function) 
var accountPassword = "mypassword123" //    var is a function scoped variable, let and  const have block scope   
// prefer not to use var  because it is outdated and doesn’t have  block scope 
accountCity = "Jaipur"//  global variable accessible anywhere in the program

let accountState;

accountID = 200; // will give an error as  it is a constant variable and we are trying to
// console.log(accountId);

accountEmail ="abc@gmail.com";
accountPassword ="21234";
accountCity="Delhi";

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])



console.log(accountEmail);















