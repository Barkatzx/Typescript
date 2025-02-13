{
  /*
  In TypeScript, you can constrain generic types to ensure they meet specific requirements. This means the generic type must have certain properties or extend a specific type.
  */

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
