/*
Async - 
The async keyword is used to declare an asynchronous function. An async function always returns a promise. Inside an async function, you can use the await keyword to pause the execution of the function until a promise is resolved or rejected.

Await - 
The await keyword can only be used inside an async function. It pauses the execution of the async function until the promise is resolved or rejected. When await is used with a promise, it waits for the promise to settle and then resumes the execution of the async function.
*/
async function john() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("26 Degree");
    }, 2000);
  });

  let mumbaiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("30 Degree");
    }, 5000);
  });
  //   delhiWeather.then(alert);
  //   mumbaiWeather.then(alert);
  console.log("fetching delhi weather please wait");
  let delhiW = await delhiWeather; //gives 26 degree after resolved
  console.log("delhi weather fetched "+ delhiW);
  console.log("fetching mumbai weather please wait");
  
  let mumbaiW = await mumbaiWeather; // gives 30 degree after resolved
  console.log(" mumbai weather fetched "+ mumbaiW);

  return [delhiW, mumbaiW];
}

console.log("welcome to weather control room");
let a = john();
a.then(function(value){
    console.log(value);
})