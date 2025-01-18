"use strict";
{
    let fvrColor;
    fvrColor = "red";
    fvrColor = "blue";
    let rating;
    rating = 4;
    rating = 5;
    let IsActive = true;
    //   IsActive = "yes"; //Error: Type '"yes"' is not assignable to type 'IsActive'.
    // Literal Types in Function Parameters
    function move(direction) {
        console.log(`Moving ${direction}`);
    }
    move("up");
    move("left");
    move("down");
    move("right");
    let user = {
        id: 1,
        name: "Alice",
        status: "active", // Only allowed values: "active", "inactive", "pending"
    };
    console.log(user);
}
