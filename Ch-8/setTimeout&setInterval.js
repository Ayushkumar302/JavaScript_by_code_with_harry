//setTimeout : means after some time it will execute , returns timer Id

document.write("hello");

// setTimeout(()=>{
// alert("this is set time out")
// },3000)

let a = setTimeout(function() {
  alert("this is set time out");
}, 5000);
let b = prompt("do you want to run the setTimeout");
if ("n" == b) {
  clearTimeout(a);
}
console.log(a);// output-  1  |  gives the id of the set time out
clearTimeout(a); // clearTimeout will stop the set time out


const sum = (a,b) =>{
    console.log("running" , (a+b));
    return a+b;
}
setTimeout(sum,5000,1,2);



// ********setInterval************
//setInterval : means that the function will be called every 1000 milliseconds
//setInterval(function, milliseconds)

//setInterval : means after some time it will execute again and again


// let x = setInterval(function(){
//     console.log("running!!!!");
// },3000);

// const multiply = (x,y) => {
//     console.log(`setInterval Running ${x*y}`);
//     return x*y;
// }
// setInterval(multiply,3000,5,2)