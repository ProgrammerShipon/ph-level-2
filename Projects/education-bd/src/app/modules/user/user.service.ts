import config from "../../config";
import { TStudent } from "../students/student.interface";
import { StudentModel } from "../students/student.model";
import { TNewUser, TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  // const user: Partial<TUser> = {
  //   role: "student",
  //   id: "20301000001",
  //   password: password || (config.default_password as string),
  // };
  const userData: Partial<TUser> = {};

  // set password
  userData.password = password || (config.default_password as string);

  // generate id
  userData.id = "20301000001";

  // set role
  userData.role = "student";

  const newUser = await UserModel.create(userData);

  console.log("newUser ", newUser);

  // create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; // reference _id

    const newStudent = await StudentModel.create(studentData);

    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
