{
  // Type assertion is a way to tell TypeScript about the type of a variable when you're sure about the type, even if TypeScript cannot infer it. It's like saying, "Trust me, I know this type." It does not change the runtime behavior but helps the TypeScript compiler understand the type better.
  //01. Using as keyword:
  let value: any = "Hello TypeScript";
  let length = (value as string).length;
  console.log(length); // 15

  // 02. Using angle-bracket syntax:
  let value2: any = "Hello TypeScript";
  let result: number = (<string>value).length;
  console.log(result); // 15

  // Both of these assertions tell TypeScript that the variable value is of type string, so accessing .length won't give an error.

  // Type Narrowing in TypeScript : Type narrowing is the process of refining a variable's type so that TypeScript understands its possible values more precisely. TypeScript uses various techniques to narrow the type, such as checking the type with typeof, instanceof, or using conditional checks.

  // 01. Using typeof for Type Narrowing
  function printLength(value: string | number) {
    if (typeof value === "string") {
      console.log(value.length); // OK
    } else {
      console.log(value.toFixed(2)); // OK
    }
  }
  printLength("Hello TypeScript"); // 15
  printLength(123.456); // 123.46

  // When typeof value === 'string', TypeScript knows that value must be a string, so we can safely access value.length. Similarly, when typeof value === 'number', TypeScript knows that value must be a number, so we can safely access value.toFixed(2).

  // 02. Using instanceof for Type Narrowing
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
      super(name);
      this.breed = breed;
    }
  }

  function greet(animal: Animal) {
    if (animal instanceof Dog) {
      console.log(`Woof! ${animal.name}`);
    } else {
      console.log(`Hello! ${animal.name}`);
    }
  }

  const myDog = new Dog("Buddy", "Golden Retriever");
  const myAnimal = new Animal("Lion");

  greet(myDog); // Woof! Buddy
  greet(myAnimal); // Hello! Lion

  //Combining Type Assertion and Type Narrowing
  function processInput(input: string | number | boolean) {
    if (typeof input === "string") {
      console.log((input as string).toUpperCase());
    } else if (typeof input === "number") {
      console.log((input as number).toFixed(2));
    } else {
      console.log(input ? "True" : "False");
    }
  }
  processInput("hello"); // HELLO
  processInput(123.456); // 123.46
  processInput(true); // True
}
