"use strict";
{
    // Basic Function Syntax
    function add(a, b) {
        return a + b;
    }
    let result = add(5, 3);
    console.log(result);
    // Optional Parameters
    function greet(name, age) {
        return age ? `Hello ${name}, You are ${age} years old` : `Hello ${name}`;
    }
    console.log(greet("Alice"));
    console.log(greet("Alice", 30));
    // Default Parameters
    function greets(name, greeting = "Hello") {
        return `${greeting}, ${name};`;
    }
    console.log(greets("Alice"));
    console.log(greets("Bob", "Good morning"));
    // Rest Parameters
    function multiply(factor, ...numbers) {
        return numbers.map((num) => num * factor);
    }
    console.log(multiply(2, 1, 2, 3));
    // Return Types
    function logMessage(message) {
        console.log(message);
    }
    // Function Types
    let adds;
    adds = function (x, y) {
        return x + y;
    };
    console.log(adds(2, 3));
    // Arrow Function
    const multiplys = (a, b) => a * b;
    console.log(multiplys(4, 5));
    // Implementation signature
    function ad(a, b) {
        return a + b;
    }
    console.log(ad(5, 10));
    console.log(ad("Hello,", "TypeScript"));
    //
    function sumArray(numbers) {
        let total = 0;
        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        return total;
    }
    console.log(sumArray([1, 2, 3, 4, 5]));
}
