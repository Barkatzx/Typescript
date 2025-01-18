"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
{
    // Array Destructuring
    const color = ["red", "green", "blue", "yellow", "violet"];
    const [firstColor, secondColor, thirdColor] = color;
    console.log(firstColor);
    console.log(secondColor);
    console.log(thirdColor);
    // Skipping Elements
    const number = [1, 2, 3, 4];
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
    const { name, age } = person, other = __rest(person, ["name", "age"]);
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
    function greet({ name, age, job }) {
        return `Hello, ${name}, Your are ${age} years old. You are a ${job}`;
    }
    const userInfo = { id: 1, name: "Alice", age: 30, job: "Developer" };
    console.log(greet(userInfo));
}
