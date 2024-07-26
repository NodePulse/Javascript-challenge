// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

num = 5;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

age = 17;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.

num1 = 5;
num2 = 10;
num3 = 15;

if (num1 > num2) {
  if (num1 > num3) {
    console.log("num1 is the largest");
  } else {
    console.log("num3 is the largest");
  }
} else if (num2 > num3) {
  console.log("num2 is the largest");
} else {
  console.log("num3 is the largest");
}

// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}

// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

score = 70;

switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
    break;
  case score >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

num = 5;

console.log(num % 2 === 0 ? "Even" : "Odd");

// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

year = 2020;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
