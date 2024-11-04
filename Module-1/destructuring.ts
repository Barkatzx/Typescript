{
  // Array Destructuring
  const color: string[] = ["red", "green", "blue", "yellow", "violet"];

  const [firstColor, secondColor, thirdColor] = color;

  console.log(firstColor);
  console.log(secondColor);
  console.log(thirdColor);

  // Skipping Elements

  const number: number[] = [1, 2, 3, 4];
  const [first, , third] = number;
  console.log(first);
  console.log(third);

  // Using Rest in Array Destructuring
  const fruits = ["apple", "banana", "orange", "date", "cherry"];
  const [firstFruit, ...othersFruit] = fruits;
  console.log(firstFruit);
  console.log(othersFruit);

  // Object Destructing
  const person = {
    name: "Alice",
    age: 30,
    job: "Developer",
  };
  const { name, age, ...other } = person;
  console.log(name);
  console.log(age);
  console.log(other);

  // Renaming Varriables Destructing
  const user = {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
  };

  const { username: userName, email } = user;

  console.log(userName);
  console.log(email);

  // Function Parameter Destructing
  type User = {
    id: number;
    name: string;
    age: number;
    job: string;
  };

  function greet({ name, age, job }: User): string {
    return `Hello, ${name}, Your are ${age} years old. You are a ${job}`;
  }
  const userInfo = { id: 1, name: "Alice", age: 30, job: "Developer" };

  console.log(greet(userInfo));
}
