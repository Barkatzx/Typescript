{
  // Basic Function Syntax

  function add(a: number, b: number): number {
    return a + b;
  }

  let result = add(5, 3);

  console.log(result);

  // Optional Parameters

  function greet(name: string, age?: number): string {
    return age ? `Hello ${name}, You are ${age} years old` : `Hello ${name}`;
  }
  console.log(greet("Alice"));
  console.log(greet("Alice", 30));

  // Default Parameters

  function greets(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name};`;
  }

  console.log(greets("Alice"));
  console.log(greets("Bob", "Good morning"));

  // Rest Parameters

  function multiply(factor: number, ...numbers: number[]): number[] {
    return numbers.map((num) => num * factor);
  }

  console.log(multiply(2, 1, 2, 3));

  // Return Types

  function logMessage(message: string): void {
    console.log(message);
  }

  // Function Types

  let adds: (a: number, b: number) => number;

  adds = function (x, y) {
    return x + y;
  };
  console.log(adds(2, 3));

  // Arrow Function

  const multiplys = (a: number, b: number): number => a * b;

  console.log(multiplys(4, 5));

  // Function Overloading

  // Overload signatures
  function ad(a: number, b: number): number;
  function ad(a: string, b: string): string;

  // Implementation signature
  function ad(a: any, b: any): any {
    return a + b;
  }

  console.log(ad(5, 10));
  console.log(ad("Hello,", "TypeScript"));

  //
  function sumArray(numbers: number[]): number {
    let total: number = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  console.log(sumArray([1, 2, 3, 4, 5]));
}
