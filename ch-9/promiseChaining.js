//Promise chaining - means we can chain multiple promises together
// Promise chaining is a technique used in JavaScript to execute multiple asynchronous operations in a sequential order. It involves linking together promises returned by asynchronous functions using .then().

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolved after 2 seconds");
        resolve(22);
    }, 2000);
});

myPromise.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved after 3 seconds");
        }, 3000);
    });
    return p2;
}).then((value) => {
    console.log("we are done");
    return 2
}).then((value) => {
    console.log("now we are finally done");
})


//using loadscript
const loadscript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src
        document.body.appendChild(script)
        script.onload = (script) => {
            resolve("script has been loaded");
        }
        script.onerror = () => {
            reject("script has not been loaded");
        }

    })
}

let p1 = loadscript("https://hsbcdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.js");
p1.then((value)=>{
    console.log(value);
    return loadscript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.js")

}).then((value)=>{
    console.log("second script is ready");
})
.catch((error)=>{
    console.error("error loading script");
})