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
    // Rest Operator (...). Rest in Function Parameter
    function sum(...numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
    }
    console.log(sum(1, 2, 3));
    console.log(sum(4, 5, 6, 7, 8));
    // Rest in Array Destructing
    const color = ["red", "green", "blue", "yellow", "violet"];
    const [primary, secondary, ...othersColor] = color;
    console.log(primary);
    console.log(secondary);
    console.log(othersColor);
    // Rest in Object Destructing
    const person = { name: "Alice", age: 30, city: "Newyork", job: "Developer" };
    const { name, age } = person, othersDetails = __rest(person, ["name", "age"]);
    console.log(name);
    console.log(age);
    console.log(othersDetails);
    // Examples Using Both Spread and Rest
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const nums3 = [5, 6];
    const allNumbers = [...nums1, ...nums2, ...nums3];
    console.log(allNumbers);
    function multiplyAll(multiplier, ...numbers) {
        return numbers.map((num) => num * multiplier);
    }
    console.log(multiplyAll(2, ...allNumbers));
}
