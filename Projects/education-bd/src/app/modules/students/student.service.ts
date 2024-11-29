import { StudentModel } from "./student.model";

const getSingleStudentDB = async (params: string) => {
  return await StudentModel.findById(params);
};

export const studentService = {
  getSingleStudentDB,
};
