{
  // Object Types
  let person: {
    name: string;
    age: number;
    isActive: boolean;
  } = {
    name: "Alice",
    age: 30,
    isActive: true,
  };

  console.log(person);

  // person is an object type with name (a string), age (a number), and isActive (a boolean).

  // Nested Object types.

  type Address = {
    street: string;
    city: string;
    zipCode: number;
  };

  type Person = {
    name: string;
    age: number;
    address: Address;
  };

  let Details: Person = {
    name: "Alice",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Metropolis",
      zipCode: 1234,
    },
  };

  console.log(Details);

  //Object types can also contain other objects as properties.
}
