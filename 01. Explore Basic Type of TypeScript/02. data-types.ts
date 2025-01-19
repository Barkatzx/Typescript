{
  // TypeScript offers a robust set of data types that enable you to write strongly typed and safer code. Here's a breakdown of the most commonly used data types in TypeScript:

  // 01. Primitive Data Types (String, Number, Boolean, Null, Undefined, Symbol)
  // 02. Object Data Type (Object, Array, Tuple, Enum)
  // 03.Others Data Types (Union, Intersection, Any, Unknown, Void, Never, Type Aliases);

  // String

  let name: string = "Alice";
  let message: string = "Hello, Typescript";
  let greeting: string = `Hello, ${name}`;

  console.log(greeting);

  //Used to represent text. String values are enclosed in single or double quotes (or backticks for template literals).

  //Number

  let number: number = 26;
  let age: number = 20;
  let total = `I'm ${age} years old. My roll number is ${number}`;

  console.log(total);

  //Represents both integers and floating-point numbers. TypeScript does not differentiate between int and float; all numbers are of type number.

  //Boolean

  let isActive: boolean = true;
  let isComplete: boolean = false;

  //Used to represent true or false values.

  //Any (For Declare Any Types of Data)

  let anyThing: any = 36;
  anyThing = "Alice";
  anyThing = true;

  // You can Declare any types of Data if you use this (any) Data Types. A flexible type that can hold any kind of value.

  // Unknown

  let something: unknown = "Hello";
  if (typeof something === "string") {
    console.log(something.toUpperCase());
  }

  //Similar to any, but safer because it requires a type check before being used. Often used when the type of data is unknown at the time of writing.

  // void

  function logMessage(message: string): void {
    console.log(message);
  }

  //Represents the absence of a type. Commonly used as the return type for functions that do not return a value.

  // null and undefined

  let empty: null = null;
  let notDefined: undefined = undefined;

  //null and undefined are both valid types. By default, they are subtypes of all other types (but this behavior depends on strictNullChecks in the TypeScript configuration).

  // Array

  let numbers: number[] = [1, 2, 3, 4, 5];
  let strings: Array<string> = ["Rana", "Ratna", "Rafi", "Kafi"];

  //An array holds multiple values of the same type. Arrays can be defined in two ways: type[] or Array<type>.

  // Tuple

  let person: [string, number, boolean] = ["Alice", 30, true];

  //Tuples allow you to define an array with a fixed number of elements, where each element has a specific type.

  // enum

  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
  let move: Direction = Direction.Up;

  //Enums allow you to define a set of named constants. By default, the values are numeric, starting from 0, but they can also be assigned specific values.

  // Object

  let user: {
    name: string;
    age: number;
  } = {
    name: "Alice",
    age: 30,
  };

  //Represents a non-primitive type that’s not number, string, boolean, symbol, null, or undefined. Can also define the structure of an object by specifying its properties and their types.

  // never

  function throwError(message: string): never {
    throw new Error(message);
  }

  //Represents a value that never occurs, often used as a return type for functions that throw an error or have infinite loops.

  //Example Program Using Different Data Types

  let username: string = "Alice"; //String
  let score: number = 95; //Number
  let isPassed: boolean = true; //Boolean
  let anything: any = "Could be anything"; //Any
  let users: {
    name: string;
    age: number;
  } = {
    name: "Bob",
    age: 25,
  }; //Object
  let fruits: string[] = ["apple", "banana", "cherry"]; //Array
  let colorCode: [number, string] = [1, "red"]; //Tuple
  enum Role {
    Admin,
    User,
    Guest,
  } //Enum

  console.log(`Name: ${username}, Score: ${score}, Passed: ${isPassed}`);
  console.log(`User: ${users.name}, Age: ${user.age}`);
  console.log(`Fruit List: ${fruits.join(", ")}`);
  console.log(`Role: ${Role.Admin}`);
}
