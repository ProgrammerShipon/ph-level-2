import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicService } from "./academicSemester.service";

// create academic semester controller
const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicService.createAcademicSemesterIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Semester is created successfully",
    data: result,
  });
});

// get all academic semester controller
const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicService.getAllAcademicSemesterIntoDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "get all Academic Semester successfully",
    data: result,
  });
});

// get single academic semester
const getAcademicSemester = catchAsync(async (req, res) => {
  const { academicSemesterId } = req.params;

  const result =
    await academicService.getAcademicSemesterIntoDB(academicSemesterId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "get Academic Semester successfully",
    data: result,
  });
});

//  update academic semester
const updateAcademicSemester = catchAsync(async (req, res) => {
  const { academicSemesterId } = req.params;

  const result = await academicService.academicSemesterUpdateIntoDB(
    academicSemesterId,
    req.body
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Update Academic Semester successfully",
    data: result,
  });
});

export const academicController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getAcademicSemester,
  updateAcademicSemester,
};
