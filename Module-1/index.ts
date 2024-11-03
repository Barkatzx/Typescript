// Simple Typescript Function

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person = new Person("Alice", 30);
console.log(person.greet());

// Explanation
// Class Definition: Person has two properties, name and age, each with a specified type (string and number, respectively).
// Constructor: Initializes the name and age properties when a new Person object is created.
// Method: The greet method returns a greeting message as a string.
// Creating an Instance: We create an instance of Person with the name "Alice" and age 30, then print the greeting message.
