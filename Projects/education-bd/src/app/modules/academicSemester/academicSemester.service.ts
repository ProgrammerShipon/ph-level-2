import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

// create academic semester
const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  // name code checking

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid Semester Code !");
  }
  // store
  const stored = await AcademicSemesterModel.create(payload);
  return stored;
};

// get all academic semester
const getAllAcademicSemesterIntoDB = async () => {
  // find data
  const findResults = await AcademicSemesterModel.find();
  return findResults;
};

// get all academic semester
const getAcademicSemesterIntoDB = async (payload: string) => {
  // find data
  const findResult = await AcademicSemesterModel.findById(payload);
  return findResult;
};

// get all academic semester
const academicSemesterUpdateIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error("Invalid Semester code !");
  }

  // find data
  const updateResult = await AcademicSemesterModel.findByIdAndUpdate(
    id,
    payload,
    { new: true }
  );

  //
  return updateResult;
};

export const academicService = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterIntoDB,
  getAcademicSemesterIntoDB,
  academicSemesterUpdateIntoDB,
};
