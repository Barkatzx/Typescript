{
  // Literal Types
  //String Literal Types

  type Color = "red" | "blue" | "green";

  let fvrColor: Color;
  fvrColor = "red";
  fvrColor = "blue";
  //   fvrColor = "yellow"; //  Error: Type '"yellow"' is not assignable to type 'Color'.

  // Numeric Literal Types

  type oneToFive = 1 | 2 | 3 | 4 | 5;

  let rating: oneToFive;
  rating = 4;
  rating = 5;
  //   rating = 7; // Error: Type '7' is not assignable to type 'OneToFive'.

  // Boolean Literals Types

  type isActive = true | false;

  let IsActive: isActive = true;
  //   IsActive = "yes"; //Error: Type '"yes"' is not assignable to type 'IsActive'.

  // Literal Types in Function Parameters

  function move(direction: "up" | "down" | "left" | "right") {
    console.log(`Moving ${direction}`);
  }
  move("up");
  move("left");
  move("down");
  move("right");

  // Combining Object, Optional, and Literal Types

  type Status = "active" | "inactive" | "pending";

  type User = {
    id: number;
    name: string;
    status: Status; // Literal type
    age?: number; // Optional property
  };

  let user: User = {
    id: 1,
    name: "Alice",
    status: "active", // Only allowed values: "active", "inactive", "pending"
  };

  console.log(user);
}
