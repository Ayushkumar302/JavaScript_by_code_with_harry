let num = Math.floor(Math.random() * 100) + 1;
let guess;

do {
    guess = parseInt(prompt("Enter a number between 1 and 100:"));

    if (guess < num) {
        console.log("Your guess is too low");
    } else if (guess > num) {
        console.log("Your guess is too high");
    } else {
        console.log("Congratulations! You guessed the correct number!");
    }
} while (guess !== num);

console.log(`The correct number was ${num}`);
