import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  // name code checking

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid Semester Code !");
  }
  // store
  const stored = await AcademicSemesterModel.create(payload);
  return stored;
};

export const academicService = {
  createAcademicSemesterIntoDB,
};
