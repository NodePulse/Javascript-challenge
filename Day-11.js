// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promise1 = new Promise(() => {
  setTimeout(() => {
    console.log("Promise1");
  }, 2000);
});
promise1;

// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise2");
    reject("Error2");
  }, 2000);
});
promise2.catch((err) => console.log(err));

// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise3");
    resolve("Data3");
  }, 2000);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise4");
    resolve("Data4");
  }, 2000);
});
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise5");
    resolve("Data5");
  }, 2000);
});
promise3
  .then((data) => console.log(data))
  .then(() => promise4)
  .then((data) => console.log(data))
  .then(() => promise5)
  .then((data) => console.log(data));

// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

async function getData() {
  const data = await promise3;
  console.log(data);
}
getData();

// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

async function getError() {
  try {
    const data = await promise2;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getError();

// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json();
    console.log(data);
}
getUser();

// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

Promise.all([promise3, promise4, promise5]).then((data) => console.log(data));

// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

Promise.race([promise3, promise4, promise5]).then((data) => console.log(data));

// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise. race to handle multiple promises concurrently and logs the results.
