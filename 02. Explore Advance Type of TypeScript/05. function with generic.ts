{
  /* Generics in functions allow you to write reusable, flexible, and type-safe code by defining placeholders for types. Instead of working with a fixed data type, generics let the function handle any data type while still maintaining type safety.
  
  Why Use Generics in Functions?
  01. Reusability
  02. Flexibility
  03. Type Safety
  04. Code Readability
  05. Performance
  */

  // Basic Generic Function
  function result<T>(value: T): T {
    return value;
  }

  const numberResult = result<number>(10);
  const stringResult = result<string>("Hello World");

  // Simple Function Without Generics
  const createArray = (param: string): string => {
    return param;
  };

  const res1 = createArray("Hello");
  //   const res2 = createArray( 234 ); // Error: Argument of type number is not assignable to parameter of type.

  /*
  01. This Function is only for string type. If we want to use this function for number or any other type then we have to create another function.

  02. It works only for string type. If we pass number type then it will show error.
  */

  // Function with Generics

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resWithGeneric = createArrayWithGeneric("Hello");
  const resWithGeneric2 = createArrayWithGeneric(10);

  /* Learning from above example:
  01. The T is Generic Type. It can be any type. We can pass any type of data.
  02. It works for all types of data. We can pass any type of data.
  */

  // Generics with Objects
  type User = { id: number; name: string };

  const resGenericObject = createArrayWithGeneric<User>({
    id: 1,
    name: "John",
  });

  /* Learning from above example:
  01. It works for objects as well.
  02. We can pass any type of object.
  */

  // Generics with Tuples
  const createArrayWithTuple = <T, U>(param1: T, param2: U): [T, U] => {
    return [param1, param2];
  };

  const resTuple = createArrayWithTuple<string, number>("Hello", 10);
  const resTuple2 = createArrayWithTuple<string, { name: string }>("Hello", {
    name: "John",
  });

  /* Learning from above example:
  01. It works for tuples as well.
  02. We can pass any type of tuple.
  */

  // Adding Properties to Objects with Generics

  const addCourseToStudent = <T>(student: T) => {
    const course = "Web Development";
    return { ...student, course };
  };

  const student1 = addCourseToStudent({
    name: "John",
    email: "s@gmail.com",
    devType: "Web Developer",
  });

  const student2 = addCourseToStudent({
    name: "Doe",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });

  /* Learning from above example:
  01. We can add properties to objects with generics.
  02. We can pass any type of object.
  03. It will add course property to the object.
  */
}
