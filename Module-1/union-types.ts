{
  // Union Types
  type Status = "success" | "error" | "loading";

  let currentStatus: Status;

  currentStatus = "success"; // Valid
  currentStatus = "loading"; // Valid
  // currentStatus = "failed"; // Error: Type '"failed"' is not assignable to type 'Status'

  //Union with Multiple Types

  type ID = number | string;

  let userId: ID;
  userId = 123; // Valid
  userId = "ABC123"; // Valid
  // userId = true;    // Error: Type 'boolean' is not assignable to type 'ID'

  //Union Types in Function Parameters
  function printId(id: number | string) {
    console.log(`ID: ${id}`);
  }

  printId(101); // Valid
  printId("ABC101"); // Valid
  // printId(true);    // Error: Argument of type 'boolean' is not assignable to parameter of type 'number | string'
}
