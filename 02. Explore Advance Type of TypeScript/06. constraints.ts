{
  /*
  In TypeScript, you can constrain generic types to ensure they meet specific requirements. This means the generic type must have certain properties or extend a specific type.
  */

  // Without constraints:
  // function getLng<T>(arg: T): number {
  //   return arg.length; // ❌ Error: Property 'length' does not exist on type 'T'
  // }

  //Fix with a constraint to ensure T has a length property:

  function getLength<T extends { length: number }>(arg: T): number {
    return arg.length; // ✅ Works because T is constrained
  }

  // Usage:
  getLength("hello"); // 5 (string has `length`)
  getLength([1, 2, 3]); // 3 (array has `length`)
  getLength({ length: 42 }); // 42
  // getLength(123); ❌ Error: number has no `length`

  interface Student {
    id: number;
    name: string;
    email: string;
  }

  const addCourseTostudent = <T extends Student>(student: T) => {
    const course = "Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseTostudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    devType: "Frontend",
  });

  const student2 = addCourseTostudent({
    id: 2,
    name: "Jane Doe",
    email: "doe@gmai.com",
    hasJob: true,
  });
}
