{
  //Intersection Types
  type Person = {
    name: string;
    age: number;
  };

  type Employee = {
    employeeId: number;
    department: string;
  };

  type Staff = Person & Employee;

  const staffMember: Staff = {
    name: "Alice",
    age: 30,
    employeeId: 123,
    department: "Engineering",
  };

  //Combining Objects with Intersection Types
  type Address = {
    street: string;
    city: string;
  };

  type Contact = {
    phone: string;
    email: string;
  };

  type CustomerInfo = Address & Contact;

  const customer: CustomerInfo = {
    street: "123 Main St",
    city: "New York",
    phone: "123-456-7890",
    email: "customer@example.com",
  };
}
