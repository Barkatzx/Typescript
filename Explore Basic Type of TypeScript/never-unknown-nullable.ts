{
  //never Type
  //Function that throws an error

  function throwError(message: string): never {
    throw new Error(message);
  }

  function infiniteLoop(): never {
    while (true) {
      // Infinite loop
    }
  }

  //unknown Type
  let userInput: unknown;

  userInput = "Hello, TypeScript!";

  if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
  }

  if (typeof userInput === "number") {
    console.log(userInput + 1);
  }

  //Nullable Types (null and undefined)
  let name: string | null = "Alice";
  name = null; // Valid

  //Strict Null Checking (strictNullChecks)
  // When strictNullChecks is enabled in tsconfig.json, TypeScript enforces that null and undefined must be explicitly specified if they are valid values. Otherwise, they will not be allowed.

  //   {
  //     "compilerOptions": {
  //       "strictNullChecks": true
  //     }
  //   }

  let username: string | null = null;
  let displayName = username ?? "Guest";
  console.log(displayName);
}
