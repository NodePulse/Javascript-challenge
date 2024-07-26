// • Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person = new Person("Sachin", 20);
console.log(person.greeting());

// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.

Person.prototype.updatedAge = function (age) {
  this.age = age;
  return age;
};

const person1 = new Person("Sachin", 20);
person1.updatedAge(25);
console.log(person1.greeting());

// • Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  getStudentId() {
    return this.studentId;
  }
}

const student = new Student("Sachin", 20, 12345);
console.log(student.getStudentId());

// • Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

Student.prototype.greeting = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}.`;
};
console.log(student.greeting());

// • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

Person.greeting = function () {
  return "Hello, welcome to the class.";
};
console.log(Person.greeting());

// • Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

Student.count = 5;
Student.prototype.count = function () {
  return Student.count;
};
console.log(Student.count);

// • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and last Name property). Create an instance and log the full name using the getter.

class getterPerson extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person2 = new getterPerson("Sachin", "Kumar");
console.log(person2.getFullName());

// • Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

class setterPerson extends getterPerson {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  setFullName() {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person3 = new setterPerson("Sachin", "Bharbey");
console.log(person3.getFullName());

// Activity 5: Private Fields (Optional)
// • Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
  #balance;

  constructor() {
    this.#balance = 0;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Invalid deposit amount");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Insufficient funds or invalid withdrawal amount");
    }
  }

  getBalance() {
    console.log(`Current balance: ${this.#balance}`);
  }
}

const account = new Account();
account.deposit(100);
account.withdraw(50);
account.withdraw(70);
console.log(account.balance);

// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const account1 = new Account();
account1.getBalance();
account1.deposit(100);
account1.getBalance();
account1.withdraw(50);
account1.getBalance();
account1.withdraw(70);
account1.getBalance();

// Feature Request:
// 1. Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.
// 2. Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.
// 3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
// 4. Getters and Setters Script: Create a script that uses getters and setters in a class.
// 5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).
