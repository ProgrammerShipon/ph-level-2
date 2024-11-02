// Reference type --> Object

// Implicit type
const user = {
  firstName: "shipon",
  middleName: "Hossen",
  lastName: "Raju",
};

// explicitly type
const user1: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "shipon",
  middleName: "Hossen",
  lastName: "Raju",
};

// optional type
const user2: {
  firstName: string;
  middleName?: string; // this optional type
  lastName: string;
  isMarried: boolean;
} = {
  firstName: "shipon",
  lastName: "Raju",
  isMarried: false,
};

// literal type
const user3: {
  company: "Developer Shipon"; // fixed type value
  firstName: string;
  middleName?: string; // this optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Developer Shipon",
  firstName: "shipon",
  lastName: "Raju",
  isMarried: false,
};

// read only property
const user4: {
  readonly company: string; // readonly value
  firstName: string;
  middleName?: string; // this optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Developer Shipon",
  firstName: "shipon",
  lastName: "Raju",
  isMarried: false,
};
