{
  // type alias
  type TStudent = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: TStudent = {
    name: "Shipon",
    age: 22,
    gender: "male",
    contactNo: "01324745723",
    address: "ctg",
  };

  const student2: TStudent = {
    name: "Shipon",
    age: 22,
    gender: "male",
    address: "ctg",
  };

  type TUserName = string;
  type TIsAdmin = boolean;
  const userName: TUserName = "Shipon";
  const isAdmin: TIsAdmin = true;

  type TAdd = (num1: number, num2: number) => number;

  const add: TAdd = (num1, num2) => num1 + num2;
}
