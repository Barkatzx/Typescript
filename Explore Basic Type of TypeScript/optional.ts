{
  // Optional Types (?)

  type Person = {
    name: string;
    age?: number; //Age is Optional
  };

  let person1: Person = { name: "Alice" };
  let person2: Person = { name: "Alice", age: 30 };

  console.log(person1, person2);

  // age is optional in the Person type, so it can be omitted when creating an object of type Person.
  // Optional properties are especially useful for representing configurations, where certain fields might not be required.

  // Optional Parameters in Functions

  function greet(name: string, age?: number): string {
    return age ? `Hello ${name}, you are ${age} years old` : `Hello ${name}`;
  }

  console.log(greet("Alice"));
  console.log(greet("Bob", 25));

  // You can also mark function parameters as optional.
}
