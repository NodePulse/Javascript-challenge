const person = {
  name: "Sachin",
  age: 20,
  getDetails() {
    return `My name is ${this.name} and my age is ${this.age}`;
  },
};

module.exports = person;
