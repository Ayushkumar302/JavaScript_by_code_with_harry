// `localStorage` is a web storage technology supported by modern browsers that allows 
// websites to store data persistently on a user's device. It's a part of the Web Storage API along 
// with `sessionStorage`. Unlike `sessionStorage`, `localStorage` data persists even after the browser 
// window is closed and is available across browser sessions. This storage is limited to about 5MB per 
// domain and can store data as key-value pairs. Developers often use
//  `localStorage` to save user preferences, application state, or 
//  cached data.

// methods by local stroage 
// 1. setItem() means set the value of the key
// 2. getItem() means get the value of the key
// 3. removeItem() means remove the key
// 4. clear() means clear the whole local storage
// 5. key() means get the key of the local storage
// 6. length() means get the length of the local storage


let key = prompt("enter key you want to set")
let value = prompt("enter value you want to set")

localStorage.setItem(key,value)

console.log(`the value at ${key} is ${localStorage.getItem(key)}`);
console.log(localStorage.key(0));
if (key =="red" || key =="blue") {
    localStorage.removeItem(key)
}
// if (key == 0) {
//     localStorage.clear()
// }