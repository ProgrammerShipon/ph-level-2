import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicService } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicService.createAcademicSemesterIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Semester is created successfully",
    data: result,
  });
});

export const academicController = {
  createAcademicSemester,
};
