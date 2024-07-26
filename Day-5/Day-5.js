// • Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOdd(num) {
  if (num % 2 == 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}

checkEvenOdd(6);

// • Task 2: Write a function to calculate the square of a number and return the result.

function square(num) {
  console.log("Square of " + num + " is " + num * num);
}

square(8);

// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function maximum(num1, num2) {
  if (num1 > num2) {
    console.log(num1, "is maximum between both the numbers.");
  } else if (num2 > num1) {
    console.log(num2, "is maximum between both the numbers.");
  } else {
    console.log("Both the numbers are equal.");
  }
}

maximum(10, 12);

// • Task 4: Write a function expression to concatenate two strings and return the result.

function concatenate(str1, str2) {
  console.log(str1 + str2);
}

concatenate("My name is ", "Sachin.");

// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(5, 3));

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const containsChar = (str, char) => {
  if (str.includes(char)) {
    return true;
  } else {
    return false;
  }
};

console.log(containsChar("Sachin", "a"));

// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function product(num1, num2 = 6) {
  return num1 * num2;
}

console.log(product(8));

// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greetings(name, age = 20) {
  return "Hello " + name;
}

console.log("Sachin");

// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function repeat(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

function greetings() {
  console.log("Hello Sachin");
}

repeat(greetings, 3);

// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function repeated(func1, func2, n) {
  for (let i = 0; i < n; i++) {
    console.log(func1() + func2());
  }
}

function sayHello() {
  return "Hello ";
}

function sachin() {
  return "Sachin";
}

repeated(sayHello, sachin, 3);

// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
