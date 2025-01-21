{
  // In TypeScript, an interface is a way to define the structure of an object or a contract for classes. It helps ensure that objects and classes conform to a specific shape, making your code more predictable and maintainable.

  /*Key Features of TypeScript Interfaces:

  01. Object type defination: Interfaces define the properties and types of an object.
  02. Optional Properties: Use ? to define optional properties.
  03. Readonly Properties: Use readonly to make properties immutable after initialization.
  04. Function Types: Define the type of functions with parameters and return values.
  05. Extending Interfaces: Interfaces can extend other interfaces to inherit properties.
  06. Class Implementation: Interfaces can be implemented by classes to enforce a structure. */

  // Example 1: Defining Object Shape
  interface User {
    name: string;
    age: number;
    email?: string; // Optional property
  }

  const user: User = {
    name: "John Doe",
    age: 30,
  };

  // Example 2: Readonly Properties
  interface Car {
    readonly brand: string;
    model: number;
  }

  const car: Car = {
    brand: "Toyota",
    model: 2021,
  };

  // myCar.brand = "Honda"; Error: Cannot assign to 'brand' because it is a read-only property.

  // Example 3: Function Types
  interface mathOperation {
    (x: number, y: number): number;
  }

  const add: mathOperation = (a, b) => a + b;
  const subtract: mathOperation = (a, b) => a - b;

  console.log(add(10, 5)); // 15
  console.log(subtract(10, 5)); // 5

  // Example 4: Extending Interfaces
  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
  }

  const myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever",
  };

  // Example 5: Interfaces with Classes
  interface Shape {
    color: string;
    area(): number;
  }

  class Circle implements Shape {
    color: string;
    radius: number;

    constructor(color: string, radius: number) {
      this.color = color;
      this.radius = radius;
    }

    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }

  const circle = new Circle("red", 10);
  console.log(circle.area()); // 314.1592653589793
}
