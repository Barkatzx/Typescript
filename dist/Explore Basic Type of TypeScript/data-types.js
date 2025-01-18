"use strict";
{
    // Basic Data Types in Typescript
    // String
    let name = "Alice";
    let message = "Hello, Typescript";
    let greeting = `Hello, ${name}`;
    console.log(greeting);
    //Used to represent text. String values are enclosed in single or double quotes (or backticks for template literals).
    //Number
    let number = 26;
    let age = 20;
    let total = `I'm ${age} years old. My roll number is ${number}`;
    console.log(total);
    //Represents both integers and floating-point numbers. TypeScript does not differentiate between int and float; all numbers are of type number.
    //Boolean
    let isActive = true;
    let isComplete = false;
    //Used to represent true or false values.
    //Any (For Declare Any Types of Data)
    let anyThing = 36;
    anyThing = "Alice";
    anyThing = true;
    // You can Declare any types of Data if you use this (any) Data Types. A flexible type that can hold any kind of value.
    // Unknown
    let something = "Hello";
    if (typeof something === "string") {
        console.log(something.toUpperCase());
    }
    //Similar to any, but safer because it requires a type check before being used. Often used when the type of data is unknown at the time of writing.
    // void
    function logMessage(message) {
        console.log(message);
    }
    //Represents the absence of a type. Commonly used as the return type for functions that do not return a value.
    // null and undefined
    let empty = null;
    let notDefined = undefined;
    //null and undefined are both valid types. By default, they are subtypes of all other types (but this behavior depends on strictNullChecks in the TypeScript configuration).
    // Array
    let numbers = [1, 2, 3, 4, 5];
    let strings = ["Rana", "Ratna", "Rafi", "Kafi"];
    //An array holds multiple values of the same type. Arrays can be defined in two ways: type[] or Array<type>.
    // Tuple
    let person = ["Alice", 30, true];
    //Tuples allow you to define an array with a fixed number of elements, where each element has a specific type.
    // enum
    let Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
    })(Direction || (Direction = {}));
    let move = Direction.Up;
    //Enums allow you to define a set of named constants. By default, the values are numeric, starting from 0, but they can also be assigned specific values.
    // Object
    let user = { name: "Alice", age: 30 };
    //Represents a non-primitive type that’s not number, string, boolean, symbol, null, or undefined. Can also define the structure of an object by specifying its properties and their types.
    // never
    function throwError(message) {
        throw new Error(message);
    }
    //Represents a value that never occurs, often used as a return type for functions that throw an error or have infinite loops.
    //Example Program Using Different Data Types
    let username = "Alice";
    let score = 95;
    let isPassed = true;
    let anything = "Could be anything";
    let users = { name: "Bob", age: 25 };
    let fruits = ["apple", "banana", "cherry"];
    let colorCode = [1, "red"];
    let Role;
    (function (Role) {
        Role[Role["Admin"] = 0] = "Admin";
        Role[Role["User"] = 1] = "User";
        Role[Role["Guest"] = 2] = "Guest";
    })(Role || (Role = {}));
    console.log(`Name: ${username}, Score: ${score}, Passed: ${isPassed}`);
    console.log(`User: ${users.name}, Age: ${user.age}`);
    console.log(`Fruit List: ${fruits.join(", ")}`);
    console.log(`Role: ${Role.Admin}`);
}
