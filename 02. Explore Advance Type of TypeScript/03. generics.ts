{
  /** In TypeScript, generics allow you to create reusable and flexible code by defining functions, classes, or interfaces that can work with different types without sacrificing type safety. Generics act as placeholders for types that are specified when the code is executed or instantiated.
   
  Why Use Generics?
  
  Type Safety: Ensures the type correctness at compile-time.
  Reusability: Write code that works with different types without rewriting it for each type.
  Flexibility: Allows customization of types for different scenarios.
  */

  // Basic Example of Generics type
  type GenericArray<T> = Array<T>;

  // const rollNumber: number[] = [1, 2, 3, 4, 5];
  const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5];

  // const names: string[] = ["John", "Doe", "Jane", "Doe"];
  const names: GenericArray<string> = ["John", "Doe", "Jane", "Doe"];

  // const boolArray: boolean[] = [true, false, true, true];
  const boolArray: GenericArray<boolean> = [true, false, true, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "John Doe",
      age: 25,
    },
    {
      name: "Jane Doe",
      age: 30,
    },
  ];

  const add = (x: number, y: number): number => x + y;
  add(1, 2);

  // Generic Tuple
  type GenericTuple<T, U> = [T, U];
  const manush: GenericTuple<string, string> = ["John Doe", "Jane Doe"];
  const UserWithId: GenericTuple<
    number,
    {
      name: string;
      email: string;
    }
  > = [1234, { name: "John Doe", email: "john@gmail.com" }];
}
