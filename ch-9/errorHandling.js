// error handling -
// 1. try catch 
/*
try Block
The try block is used to wrap code that might throw an error. If an error occurs within the try block, the execution of the try block is halted, and the control is transferred to the nearest catch block.

catch block
The catch block is used to catch and handle errors thrown within the corresponding try block. It takes one parameter, typically named error, which represents the error object that was thrown.
*/


setTimeout(() => {
    console.log("hacking wifi...please wait");
}, 1000);

// try/catch
try { //only for synchronous
    console.log(rahul);
    
} catch (error) {
    console.log(error);
}

setTimeout(() => {
    console.log("fetching username and password..please wait");
}, 2000);

setTimeout(() => {
    console.log("hacking rahul's facebook id...please wait");
}, 3000);

setTimeout(() => {
    console.log("rahul's facebook id...fetched (id=rahul_234 & passsword=rahul0098)");
}, 4000);