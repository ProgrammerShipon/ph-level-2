import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserService } from "./user.service";
import { userValidation } from "./user.validation";

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;
  console.log("req.body ", req.body);
  const zodParsedData = userValidation.userValidationSchema.parse(studentData);

  const result = await UserService.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Student is Created successfully",
    data: result,
  });
});

export const userController = {
  createStudent,
};
