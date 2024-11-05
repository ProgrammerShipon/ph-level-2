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
  console.log(`user name is - ${name}`);
  console.log(`user age is - ${age}`);
  if (role) console.log(`user role is - ${role}`);
};

basicFunction("Developer Shipon", 21, "admin");
console.log("--------------------------------------");
basicFunction("Shipon Hossen Raju", 21);
