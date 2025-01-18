"use strict";
{
    // Spread Operator (...)
    //   The spread operator (...) is used to "spread out" elements of an array or properties of an object. This can be useful for:
    // Copying arrays or objects
    // Merging arrays or objects
    // Passing elements of an array as individual arguments to a function
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const copyArray = [...array1]; //copy array
    const mergeArray = [...array1, ...array2]; //merge array
    console.log(copyArray);
    console.log(mergeArray);
    // Spread Operator in Object
    const person = { name: "Alice", age: 25 };
    const job = {
        title: "Developer",
        company: "Tesla",
    };
    const copyPerson = Object.assign({}, person);
    const personWithJob = Object.assign(Object.assign({}, person), job);
    console.log(copyPerson);
    console.log(personWithJob);
    // Using Spread Operator to Pass the Arguments
    const numbers = [10, 20, 30];
    function add(a, b, c) {
        return a + b + c;
    }
    console.log(add(...numbers));
}
