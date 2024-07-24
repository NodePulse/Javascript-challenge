// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function error() {
  throw new Error("Error");
}

try {
  error();
} catch (err) {
  console.log(err);
}

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
try {
  console.log(divide(10, 0));
} catch (err) {
  console.log(err);
}

// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

try {
  console.log("Try");
} catch (err) {
  console.log("Catch");
} finally {
  console.log("Finally");
}

// • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
  constructor(message) {
    super(message);
  }
}
try {
  throw new CustomError("Custom Error");
} catch (err) {
  console.log(err);
}

// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

function validateInput(input) {
  if (input === "") {
    throw new Error("Input cannot be empty");
  }
}
try {
  validateInput("");
} catch (err) {
  console.log(err);
}

// • Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random < 0.5) {
    resolve("Promise resolved");
  } else {
    reject("Promise rejected");
  }
});
promise.catch((err) => console.log(err));

// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function getError() {
  try {
    const data = await promise;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getError();

// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

fetch("invalid-url")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function getError() {
  try {
    const data = await fetch("invalid-url");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getError();

// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// 2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// 3. Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.
// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.
