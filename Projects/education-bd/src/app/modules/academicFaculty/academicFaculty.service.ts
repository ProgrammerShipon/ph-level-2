import { TAcademicFaculty } from "./academicFaculty.interface"
import { AcademicFacultyModel } from "./academicFaculty.model"

// faculty create
const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
   const result = await AcademicFacultyModel.create(payload);

   return result
}

// get all faculty
const getAllFaculty = 


export const serviceFaculty = {
  createAcademicFacultyIntoDB,
};
