{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 19;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  // nullish coalescing operator
  // null / undefined ---> decision making

  const isAuthenticated = null;

  const result1 = isAuthenticated ?? "Guest";
  console.log({ result1 });

  type TUser = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: TUser = {
    name: "Shipon",
    address: {
      city: "pabna",
      road: "Dhalarchar",
      presentAddress: "Room",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });

  //
}
