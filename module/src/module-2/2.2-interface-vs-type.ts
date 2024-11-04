{
  //

  // interface
  type User1 = {
    name: string;
    age: number;
  };

  const user1: User1 = {
    name: "Shipon",
    age: 21,
  };

  interface User2 {
    name: string;
    age: number;
  }
  const user2: User2 = {
    name: "Hossen",
    age: 23,
  };

  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user3: UserWithRole1 = {
    name: "Raju",
    age: 234,
    role: "manager",
  };

  const user4: UserWithRole2 = {
    name: "nop",
    age: 234,
    role: "manager",
  };

  // js --> object, array --> object function --> object

  type rollNumber = number;

  type Roll = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;
  //
}
