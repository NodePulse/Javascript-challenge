// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
  title: "Four Stars of Destiny",
  author: "General Manoj Mukund Naravane",
  year: 2024,
};
console.log(book);

// • Task 2: Access and log the title and author properties of the book object.

console.log(book.title);
console.log(book.author);

// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.getDetails = function () {
  return book.title + " by " + book.author;
};
console.log(book.getDetails());

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateYear = function (year) {
  book.year = year;
  return book.year;
};
console.log(book.updateYear(2025));

// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let library = {
  name: "Manoj's Library",
  books: [
    {
      title: "Four Stars of Destiny",
      author: "General Manoj Mukund Naravane",
      year: 2024,
    },
    {
      title: "Four Stars of Destiny",
      author: "General Manoj Mukund Naravane",
      year: 2024,
    },
  ],
};
console.log(library);

// • Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);

// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

book.getDetails = function () {
  return this.title + " (" + this.year + ")";
};
console.log(book.getDetails());

// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (let prop in book) {
  console.log(prop, book[prop]);
}

// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));

// Feature Request:
// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys / Object.values.
