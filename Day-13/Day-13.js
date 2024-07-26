// • Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

const add = require("./Day-13-add")
console.log(add(4, 5));

// • Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const person = require("./Day-13-person");
console.log(person);
console.log(person.getDetails());

// • Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

const { multiply, divide } = require("./Day-13-multiple");
console.log(multiply(4, 5));
console.log(divide(4, 5));

// • Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

const func = require("./Day-13-subtract")
console.log(func(4, 5));

// • Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

const modules = require("./Day-13-module")
console.log(modules.GRAVITY);

// • Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

const lodash = require("lodash")
console.log(lodash.random(1, 10));

// • Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

const axios = require("axios");
axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((data) => console.log(data.data[0].name))
    .catch((err) => console.log(err));

// • Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.



// Feature Request:
// 1. Basic Module Script: Write a script that creates a module exporting a function and imports it in another script.
// 2. Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage.
// 3. Third-Party Module Script: Write a script that installs, imports, and uses functions from third-party modules like lodash and axios.
// 4. Module Bundling Script: Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).