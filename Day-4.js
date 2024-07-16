// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// • Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}

console.log(sum);

// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let j = 10;

while (j > 0) {
  console.log(j);
  j--;
}

// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let k = 1;

do {
  console.log(k);
  k++;
} while (k <= 5);

// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.

num = 31;
fact = 1;
i = 1;

do {
  fact *= i;
  i++;
} while (i <= num);

console.log(fact);

// • Task 7: Write a program to print a pattern using nested for loops:

// *
// * *
// * * *
// * * * *
// * * * * *

row = 5;

for (let i = 0; i < row; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}

// Feature Request:
// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
