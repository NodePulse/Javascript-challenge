// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = "Sachin";
let age = 20;
console.log(`My name is ${name} and my age is ${age}`);

// • Task 2: Create a multi-line string using template literals and log it to the console.

const multiLineString = `Hello Sir
Good Morning
My name is ${name} and
my age is ${age}`;

console.log(multiLineString);

// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let array = [2, 7, 8, 1, 0, 3];
console.log(array[0], array[1]);

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
  title: "Four Stars of Destiny",
  author: "General Manoj Mukund Naravane",
  year: 2024,
};
console.log(book.title);
console.log(book.author);

// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let existing_array = [1, 9, 5, 2];
let additionalElement = [7, 3, 4, 0];
let new_array = [...existing_array, ...additionalElement];
console.log(new_array);

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function product(num1, num2 = 1) {
  return num1 * num2;
}
console.log(product(5));

// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let obj1 = {
  name: "Sachin",
  age: 20,
  getDetails() {
    return `My name is ${this.name} and my age is ${this.age}`;
  },
};
console.log(obj1.getDetails());

// • Task 9: Create an object with computed property names based on variables and log the object to the console.

let obj2 = {
  name: "Sachin",
  age: 20,
};
console.log(obj2["name"], obj2["age"]);

// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
