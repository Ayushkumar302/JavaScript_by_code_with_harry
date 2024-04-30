
//Prototype in js
// Prototypes in JavaScript enable objects to inherit properties and methods from other objects, facilitating efficient code 
// reuse and supporting the prototype-based nature of JavaScript's object-oriented paradigm.

// let a = {
//     name: "John",
//     age: 20
// }
// console.log(a);

// let p = {
//     run: ()=> {
//         console.log("running");
//     }
// }

// a.__proto__ = p
// a.run()


let a = {
    name: "John",
    age: 20,
    run: ()=> {
        console.log(" self running");
    }
}
console.log(a);

let p = {
    run: ()=> {
        console.log("running");
    }
}
p.__proto__={
    name2:"stark"
}

a.__proto__ = p
a.run()
console.log(a.name2);


