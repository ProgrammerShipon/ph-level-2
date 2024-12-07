import config from "../../config";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { TStudent } from "../students/student.interface";
import { StudentModel } from "../students/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  // const user: Partial<TUser> = {
  //   role: "student",
  //   id: "20301000001",
  //   password: password || (config.default_password as string),
  // };
  const userData: Partial<TUser> = {};

  // set password
  userData.password = password || (config.default_password as string);

  // find academic semester info
  const admissionSemester = await AcademicSemesterModel.findById(
    payload.admissionSemester
  );

  // generate id
  userData.id = await generateStudentId(admissionSemester);

  // set role
  userData.role = "student";

  const newUser = await UserModel.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; // reference _id

    const newStudent = await StudentModel.create(payload);

    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
