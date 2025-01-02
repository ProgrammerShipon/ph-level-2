import { StudentModel } from "./student.model";

// get single student into db
const getSingleStudentDB = async (params: string) => {
  return await StudentModel.findById(params);
};

// get all students into db
const getAllStudentDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };
  const studentSearchableFields = ["email", "name.firstName", "presentAddress"];
  let searchTerm = "";

  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const searchQuery = StudentModel.find({
    $or: studentSearchableFields.map((field) => ({
      [field]: {
        $regex: searchTerm,
        $options: "i",
      },
    })),
  });

  const excludeFields = ["searchTerm"];

  excludeFields.forEach((el) => delete queryObj[el]);

  // filtering
  const result = await searchQuery
    .find(query)
    .populate("academicSemester")
    .populate({
      path: "AcademicDepartment",
    });

  return result;
};

export const studentService = {
  getSingleStudentDB,
  getAllStudentDB,
};
