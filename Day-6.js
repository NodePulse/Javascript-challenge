// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let arr = [1, 2, 3, 4, 5];
console.log(arr);

// • Task 2: Access the first and last elements of the array and log them to the console.

first = arr[0];
last = arr[arr.length - 1];
console.log(first, last);

// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.

arr.push(6);
console.log(arr);

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.

arr.pop();
console.log(arr);

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.

arr.shift();
console.log(arr);

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

arr.unshift(1);
console.log(arr);

// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.

newArray = arr.map((num) => {
  return num * num;
});
console.log(newArray);

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.

newArray = arr.filter((num) => {
  return num % 2 == 0;
});
console.log(newArray);

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

sum = arr.reduce((a, b) => {
  return a + b;
});
console.log(sum);

// • Task 10: Use a for loop to iterate over the array and log each element to the console.

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.

arr.forEach((num) => {
  console.log(num);
});

// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);

// • Task 13: Access and log a specific element from the two-dimensional array.

console.log(matrix[1][2]);

// Feature Request:
// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.
// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.
// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.
