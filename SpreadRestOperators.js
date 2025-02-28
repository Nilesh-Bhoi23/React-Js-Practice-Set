// Spread with Arrays

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Shallow copy

console.log(arr2); // [1, 2, 3]

// Merging Arrays:

const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4]

// Adding Elements to Arrays:

const numbers = [1, 2, 3];
const updatedNumbers = [0, ...numbers, 4];

console.log(updatedNumbers); // [0, 1, 2, 3, 4]

// Spread with Objects

const user = { name: "John", age: 30 };
const copiedUser = { ...user };

console.log(copiedUser); // { name: "John", age: 30 }

// Merging Objects:

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }

// Updating Object Properties:

const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26 };

console.log(updatedUser); // { name: "Alice", age: 26 }

// Spread in Function Calls
// Spread can pass array elements as separate arguments.

const numbers = [10, 20, 30];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...numbers)); // 60

// Rest Operator

// The rest operator collects multiple elements and condenses them into an array.

//  Rest in Function Parameters
// Collecting Arguments:

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// Fixed + Variable Arguments:

function greet(first, ...others) {
  console.log("Hello", first);
  console.log("Others:", others);
}

greet("John", "Alice", "Bob");
// Output:
// Hello John
// Others: [ 'Alice', 'Bob' ]

// Destructuring with Rest
// Array Destructuring:

const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Object Destructuring:

const user = { name: "John", age: 30, city: "NY" };

const { name, ...details } = user;

console.log(name); // "John"
console.log(details); // { age: 30, city: "NY" }
