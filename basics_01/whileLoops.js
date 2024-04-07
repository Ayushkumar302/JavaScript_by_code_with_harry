// what is while loop
// A "while" loop in programming is a control flow statement that allows code to be executed repeatedly
// as long as a given condition remains true. The loop continues to run the block of code until 
// the specified condition becomes false. In other words, it executes the statements inside the loop
// zero or more times before checking the condition again. If the condition is initially true,
// then the loop will execute at least once.

let n = 5
let i = 0;
while (i<n) {
    console.log(i);
    i++;
}

//do while loop
//The "do...while" loop works similarly to the "while" loop except that the condition
//is checked after executing the loop's code once. This means that the loop will always
//execute at least one pass through its code before evaluating whether to continue or not.

let x = 10
do {
    console.log(i); //   this line of code will get executed at least once and then the condition will be tested
    i++;
} while (i<x);

// prints all even numbers from 1 to 20.
let num = 1;
while (num<=20) {
    if (num%2==0) {
        console.log(num);
    }
    num++;
    
}

