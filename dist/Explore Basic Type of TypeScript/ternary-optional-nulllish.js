"use strict";
var _a;
{
    //Ternary Operator
    //condition ? expressionIfTrue : expressionIfFalse;
    const age = 20;
    const message = age >= 18 ? "Adult" : "Minor";
    console.log(message);
    //Nested Ternary (use cautiously)
    const score = 75;
    const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
    console.log(grade);
    const user = { name: "Alice" };
    console.log((_a = user.address) === null || _a === void 0 ? void 0 : _a.city);
    //Nullish Coalescing Operator (??)
    //value ?? defaultValue;
    const username = null;
    const defaultName = "Guest";
    const displayName = username !== null && username !== void 0 ? username : defaultName;
    console.log(displayName);
    //Comparison with Logical OR (||)
    const input = 0;
    console.log(input || "Default");
    console.log(input !== null && input !== void 0 ? input : "Default");
}
