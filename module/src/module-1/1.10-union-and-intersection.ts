{
  // union types
  type TFrontendDeveloper = "fakiBazDeveloper" | "juniorDeveloper";
  type TFullStackDeveloper = "frontendDeveloper" | "juniorDeveloper";
  type TDeveloper = TFrontendDeveloper | TFullStackDeveloper;
  type TUser = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "B+" | "B-" | "O+" | "O-";
  };
  type TFrontendDevelopers = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type TBackendDevelopers = {
    skills: string[];
    designation2: "Backend Developer";
  };
  type TFullstackDeveloper = TFrontendDevelopers & TBackendDevelopers;

  const newDeveloper: TFrontendDeveloper = "fakiBazDeveloper";

  const user1: TUser = {
    name: "shipon",
    gender: "male",
    bloodGroup: "B+",
  };

  const fullStackDeveloper: TFullstackDeveloper = {
    skills: ["html", "css", "express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
