// callback hell also called pyramid of hell means it is very difficult to read and maintain the code

// Callback hell, also known as the "pyramid of doom," is a term used to describe the situation that arises in asynchronous JavaScript programming when multiple nested callback functions are used to handle asynchronous operations. This pattern can lead to deeply nested and hard-to-read code, making it difficult to manage and maintain.

asyncFunction1((error1, result1) => {
    if (error1) {
        console.error('Error:', error1);
    } else {
        asyncFunction2((error2, result2) => {
            if (error2) {
                console.error('Error:', error2);
            } else {
                asyncFunction3((error3, result3) => {
                    if (error3) {
                        console.error('Error:', error3);
                    } else {
                        // More nested callbacks...
                    }
                });
            }
        });
    }
});
