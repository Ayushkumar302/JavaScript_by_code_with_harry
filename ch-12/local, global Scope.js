// Global Scope:
// Variables declared outside of any function or block have global scope. 
// They can be accessed and modified from anywhere in your code,
//  including inside functions.
// example - var

// Local Scope:
// Variables declared inside a function or block have local scope. 
// They can only be accessed and modified within that specific function or block.
// ex= let , const
// {
//     let a = 10;
//     // var b = 10
// }
// console.log(a);

let p = 7

function aw() {
    let a = 8
    console.log(a);
    console.log(p);
}

aw();
console.log(a);// error