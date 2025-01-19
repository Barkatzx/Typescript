{
  // Basic Type Alias
  type ID = number | string;

  let userId: ID;
  (userId = 1), 2, 3;
  userId = "ABCDE";

  // Object type alias
  type user = {
    id: number;
    name: string;
    age: number;
    email: string;
  };

  const userInfo: user = {
    id: 1,
    name: "Alice",
    age: 30,
    email: "alice@gmail.com",
  };

  console.log(userInfo);

  // Array Type Alias
  type userDetails = {
    id: number;
    name: string;
  };

  type UserArray = userDetails[];
  const user: UserArray = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  console.log(user);

  // Function type alias
  type greet = (name: string) => string;

  const greetUser: greet = (name) => `Hello, ${name}`;

  console.log(greetUser("Alice"));

  // Union Type Alias
  type status = "Success" | "Error" | "Loading";

  let currentStatus: status;
  currentStatus = "Success";
  currentStatus = "Loading";
  //   currentStatus = "Failed"; //not assignable to type alias

  // Optional and ReadOnly Properties

  type Car = {
    readonly brand: string;
    model: string;
    year?: number; // Optional
  };

  const myCar: Car = {
    brand: "Toyota",
    model: "Corolla",
  };

  // myCar.brand = "Honda"; // Error: Cannot assign to 'brand' because it is a read-only property

  //flexibility in type:

  type StatusCode = 200 | 404 | 500;
  type MixedArray = (string | number)[];
  type Callback = () => void;
}
