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

  //Optional Chaining (?.)
  //object?.property?.subProperty;
  type User = {
    name: string;
    address?: {
      street?: string;
      city?: string;
    };
  };

  const user: User = { name: "Alice" };
  console.log(user.address?.city);

  //Nullish Coalescing Operator (??)
  //value ?? defaultValue;

  const username = null;
  const defaultName = "Guest";

  const displayName = username ?? defaultName;
  console.log(displayName);

  //Comparison with Logical OR (||)
  const input = 0;

  console.log(input || "Default");
  console.log(input ?? "Default");
}
