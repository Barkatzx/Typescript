{
  // Generic Constraints with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";
  type Owner2 = keyof Vehicle;

  const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
  };

  const user = {
    name: "John",
    age: 26,
    address: "USA",
  };

  const car = {
    model: "BMW",
    year: 2020,
  };

  const result = getProperty(user, "name");
}
