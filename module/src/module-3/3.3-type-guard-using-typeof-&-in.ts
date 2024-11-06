{
  // type guards

  // typeof --> type guard
  type Alphanumeric = string | number;
  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 5);
  console.log(result1);
  const result2 = add("2", "5");
  console.log(result2);

  // in guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My Name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My Name is ${user.name} and my role is normal user`);
    }
  };

  const normalUser: NormalUser = { name: "Mr. Normal Bhai" };
  const adminUser: AdminUser = { name: "Mr. Admin Bhai", role: "admin" };

  getUser(normalUser);
  getUser(adminUser);
  //
}
