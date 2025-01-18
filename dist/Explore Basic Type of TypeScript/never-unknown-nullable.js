"use strict";
{
    //never Type
    //Function that throws an error
    function throwError(message) {
        throw new Error(message);
    }
    function infiniteLoop() {
        while (true) {
            // Infinite loop
        }
    }
    //unknown Type
    let userInput;
    userInput = "Hello, TypeScript!";
    if (typeof userInput === "string") {
        console.log(userInput.toUpperCase());
    }
    if (typeof userInput === "number") {
        console.log(userInput + 1);
    }
    //Nullable Types (null and undefined)
    let name = "Alice";
    name = null; // Valid
    //Strict Null Checking (strictNullChecks)
    // When strictNullChecks is enabled in tsconfig.json, TypeScript enforces that null and undefined must be explicitly specified if they are valid values. Otherwise, they will not be allowed.
    //   {
    //     "compilerOptions": {
    //       "strictNullChecks": true
    //     }
    //   }
    let username = null;
    let displayName = username !== null && username !== void 0 ? username : "Guest";
    console.log(displayName);
}
