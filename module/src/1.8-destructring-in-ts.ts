{
  // Object destructuring
  const user = {
    id: 324,
    name: {
      firstName: "Shipon",
      middleName: "Hossen",
      lastName: "Persian",
    },
    contactNo: "01310861071",
    address: "Dhalarchar",
  };

  const {
    contactNo,
    name: { middleName },
  } = user;

  // Array destructuring
  const myFriends = ["Shipon", "Arman", "Jamal", "Rakib", "Shariful"];

  const [, , bestPartner, ...rest] = myFriends;
}
