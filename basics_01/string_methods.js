// string methods 

let n = "john  flake"
// let n = "john\""  prints 4 

console.log(n.length);
console.log(n.toUpperCase())
console.log(n.toLowerCase())



//indexOf() - returns the first position of a specified value, or -1 if not found.
console.log(n.indexOf()); //-1 not found
console.log(n.indexOf("o")); //3

console.log(n.slice(2.4));
console.log(n.slice(2)); // from index 2 till end
console.log(n.slice(2,2));//  returns undefined because it is out of range

console.log(n.replace("flake","doe")); //  replaces all occurances of 'flake ' with 'doe'


let n2 = "  andrew   "
console.log(n2.trim()); //removes whitespace at both ends
// console.log(n2);