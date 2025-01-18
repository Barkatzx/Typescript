"use strict";
{
    let currentStatus;
    currentStatus = "success"; // Valid
    currentStatus = "loading"; // Valid
    let userId;
    userId = 123; // Valid
    userId = "ABC123"; // Valid
    // userId = true;    // Error: Type 'boolean' is not assignable to type 'ID'
    //Union Types in Function Parameters
    function printId(id) {
        console.log(`ID: ${id}`);
    }
    printId(101); // Valid
    printId("ABC101"); // Valid
    // printId(true);    // Error: Argument of type 'boolean' is not assignable to parameter of type 'number | string'
}
