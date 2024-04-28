//finally clause is always executed
//regardless of what happens in try or catch block
//this block is used to execute some clean up activities

try {
    let a = 0;
    console.log(Program);
    console.log("Runs succcessfully");
} catch (error) {
    console.log("This is an error");
    console.log(abc);// shows error
}
finally{
    console.log("finally means it always execute ");
}