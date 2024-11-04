{
  // Rest Operator (...). Rest in Function Parameter
  function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  console.log(sum(1, 2, 3));
  console.log(sum(4, 5, 6, 7, 8));

  // Rest in Array Destructing
  const color = ["red", "green", "blue", "yellow", "violet"];
  const [primary, secondary, ...othersColor] = color;

  console.log(primary);
  console.log(secondary);
  console.log(othersColor);

  // Rest in Object Destructing
  const person = { name: "Alice", age: 30, city: "Newyork", job: "Developer" };
  const { name, age, ...othersDetails } = person;

  console.log(name);
  console.log(age);
  console.log(othersDetails);

  // Examples Using Both Spread and Rest

  const nums1 = [1, 2];
  const nums2 = [3, 4];
  const nums3 = [5, 6];

  const allNumbers = [...nums1, ...nums2, ...nums3];

  console.log(allNumbers);

  function multiplyAll(multiplier: number, ...numbers: number[]): number[] {
    return numbers.map((num) => num * multiplier);
  }

  console.log(multiplyAll(2, ...allNumbers));
}
