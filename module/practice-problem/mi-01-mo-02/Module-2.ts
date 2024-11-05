/*

Task 1: Basic Data Types and First Program
Objective: Write a TypeScript program that outputs a welcome message.

Instructions:

Create a TypeScript program.
Print the following message to the console:
Hello World, I will complete this course successfully and become a Next level Web Developer!

*/

const data: string =
  "Hello World, I will complete this course successfully and become a Next level Web Developer!";

// console.log(data); // todo:

// ======================================================
// ======================================================

/* 

Task 2: Functions, Optional, and Literal Types
Objective: Create a function with parameters and an optional literal type.

Instructions:

Define a function that takes:
   name (string)
   age (number)
   role (optional, with type 'admin' | 'user' | 'guest')
The function should log these values or perform a basic action.

*/

type TUser = {
  name: string;
  age: number;
  role?: "admin" | "user" | "guest";
};

const basicFunction = (
  name: string,
  age: number,
  role?: "admin" | "user" | "guest"
) => {
  // console.log(`user name is - ${name}`);  // todo:
  // console.log(`user age is - ${age}`);  // todo:
  // if (role) console.log(`user role is - ${role}`);  // todo:
};

basicFunction("Developer Shipon", 21, "admin");
console.log("--------------------------------------");
basicFunction("Shipon Hossen Raju", 21);

// ======================================================
// ======================================================

/* 

Task 3: Object Types, Type Alias, & Literal Types
Objective: Define a structured Person object using Type Aliases.

Instructions:

Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

*/

type Address = {
  street: string;
  city: string;
  zip: string;
  country: string;
};

type Hair = "black" | "brown" | "red" | "gray" | "others";

type Eye = "black" | "blue" | "green" | "hazel" | "gray" | "others";

type Job = {
  company: string;
  title: string;
  salary: number;
};

type FamilyMembers = {
  name: string;
  age: number;
  relation:
    | "father"
    | "mother"
    | "brother"
    | "sister"
    | "sibling"
    | "cosine"
    | "child"
    | "uncle";
};

type Skills = {
  name: "string";
  level: "beginner" | "intermediate" | "advanced" | "expert";
};

type Friends = {
  name: string;
  relation: number;
};

type Person = {
  name: string;
  address: Address;
  hairColor: Hair;
  eyeColor: Eye;
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: FamilyMembers[];
  job: Job;
  skills: string[];
  isMarital: boolean;
  friends: Friends[];
};

// -----------
// example
const personDetails: Person = {
  name: "Shipon",
  address: {
    country: "Bangladesh",
    city: "pabna",
    street: "Dhalarchar",
    zip: "8266",
  },
  hairColor: "black",
  eyeColor: "black",
  income: 2000,
  expense: 1800,
  hobbies: ["learning", "reading", "traveling"],
  familyMembers: [
    {
      name: "Halim Bapari",
      age: 49,
      relation: "father",
    },
    {
      name: "Beli Khatun",
      age: 45,
      relation: "mother",
    },
  ],
  job: {
    title: "MERN Stack Developer",
    company: "Developer Shipon",
    salary: 0,
  },
  skills: ["Javascript", "Reactjs", "Expressjs", "Mongodb", "Typescript"],
  isMarital: false,
  friends: [
    {
      name: "Arman",
      relation: 18,
    },
  ],
};

// ======================================================
// ======================================================

/*

Task 5: Function Type
Objective: Write a function that reverses a string.

Instructions:
  Write a function reverseString that:
  Takes a single string argument.
  Returns the string in reverse order.

Example:
  Input: "hello"
  Output: "olleh"

*/

function reverseString(data: string) {
  if (typeof data !== "string") return data;

  const stringSplit = data.split("").reverse().join("");
  // console.log("input: ", data); // todo:
  // console.log("output: ", stringSplit); // todo:
}

const exampleData = "Hello";
reverseString(exampleData);

// ======================================================
// ======================================================

/*

Task 6: Spread and Rest Operators, Destructuring
Objective: Write a function that uses the rest operator for variable-length arguments.

Instructions:

Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.


// ======================================================
// ======================================================

/*

Task 7: Type Assertion and Narrowing
Objective: Write a function that behaves differently based on the input type.

Instructions:

Create a function that accepts a parameter of type string | number.
The function should:
Return the length if the input is a string.
Return the square if the input is a number.


// ======================================================
// ======================================================

/*

Task 8: Intersection Types
Objective: Practice using intersection types.

Instructions:

Create a type AdminUser that is an intersection of:
User with properties name and email
Admin with property adminLevel
Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.

*/

// ======================================================
// ======================================================

/*
Task 9: Optional Chaining
Objective: Use optional chaining with nested objects.

Instructions:

Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.
*/

// ======================================================
// ======================================================

/*
Task 10: Nullish Coalescing
Objective: Handle null and undefined values using nullish coalescing.

Instructions:

Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.
*/

// ======================================================
// ======================================================

/*
Task 11: Unknown Type
Objective: Handle different types with the unknown type.

Instructions:

Write a function processData(data: unknown) that:
Checks if data is a string and returns the uppercased version.
If data is a number, returns the square of it.
*/

// ======================================================
// ======================================================

/*
Task 12: Never Type
Objective: Use the never type for functions that don’t return.

Instructions:

Write a function handleError that:
Accepts a message: string.
Throws an error with the given message.
Use the never return type to indicate that this function never returns.

*/

// ======================================================
// ======================================================

/*
Task 13: Generics with Functions and Interfaces
Objective: Use generics to handle different types.

Instructions:

Create a generic function that:
Accepts an array of any type.
Returns a new array with duplicate values removed.
*/

// ======================================================
// ======================================================

/*

Task 14: Asynchronous TypeScript and Type Aliases
Objective: Simulate an asynchronous operation with TypeScript.

Instructions:

Write an asynchronous function that:
Simulates fetching user data (containing name and age).
Returns the data after a short delay.

*/

// ======================================================
// ======================================================

/*
Task 15: Type Guards
Objective: Create custom type guards for more accurate type checking.

Instructions:

Write a function isString(value: unknown): value is string that checks if a value is a string.
Use this in another function printUpperCase(value: unknown): void that prints the value in uppercase if it’s a string.

*/

// ======================================================
// ======================================================

/*
Task 16: Utility Types and Keyof Constraints
Objective: Access object properties dynamically using keyof.

Instructions:

Create a function that:
Takes an object and a key.
Returns the property value from the object based on the provided key.
Use keyof to constrain the key to valid properties of the object.
*/
