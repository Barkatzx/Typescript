{
  /* Generics with interfaces in TypeScript allow you to create reusable and type-safe structures that can work with a variety of types. By defining a generic type parameter in an interface, you can ensure that the interface works for different data types while maintaining strong type checking.
    
  Why Use Generics with Interfaces?
  01. Reusability
  02. Type Safety
  03. Flexibility
  04. Strong Type Checking
  05. Code Consistency
 */

  // Basic Generic with interface
  interface Container<T> {
    value: T;
  }

  const numberContainer: Container<number> = { value: 42 };
  const stringContainer: Container<string> = { value: "Hello, World!" };

  console.log(numberContainer.value); // 42
  console.log(stringContainer.value); // Hello, World!

  // Generic with interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Shakil",
    computer: {
      brand: "Asus",
      model: "ROG",
      releaseYear: 2021,
    },
    smartWatch: {
      brand: "Emilab",
      model: "E-100",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Shakil",
    computer: {
      brand: "Asus",
      model: "ROG",
      releaseYear: 2021,
    },
    smartWatch: {
      brand: "Apple",
      model: "Series 6",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha R15",
      engineCapacity: "150cc",
    },
  };
}
