// spread operator
// rest operator
// destructuring

// learn spread operator
const bros1: string[] = ["shipon", "hossen", "raju"];
const bros2: string[] = ["Rakib", "shariful"];

bros1.push(...bros1);

const mentors1 = {
  typescript: "mezba",
  redux: "mir",
  dbms: "mizan",
};

const mentors2 = {
  prima: "firoz",
  next: "tanmoy",
  cloud: "nahid",
};

const mentorList = {
  ...mentors1,
  ...mentors2,
};

// learn rest operator
const greetFriends = (friend1: string, friend2: string, friend3: string) => {
  console.log(`Hi, ${friend1}  ${friend2}  ${friend3}`);
};

const greetFriend = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hi, ${friend}`));
};
