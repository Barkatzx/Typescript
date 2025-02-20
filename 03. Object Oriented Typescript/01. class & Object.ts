{
  // A class is a blueprint for creating objects. It defines properties (data) and methods (functions) that an object will have.
  // Example 1: Basic Class & Object in TypeScript

  class Person {
    name: string; // Property
    age: number; // Property

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    introduce(): void {
      console.log(
        `Hi, my name is ${this.name} and I am ${this.age} years old.`
      );
    }
  }

  // Creating an object (Instance of the class)
  const person1 = new Person("Barkat", 25);
  person1.introduce(); // Output: Hi, my name is Barkat and I am 25 years old.

  // Object Oriented - Class

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
  const cat = new Animal("Russian", "cat", "meaw meaw");

  cat.makeSound();

  //
}
