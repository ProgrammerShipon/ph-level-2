import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import { userValidation } from "./user.validation";
import sendResponse from "../../utils/sendResponse";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student: studentData } = req.body;
    console.log("req.body ", req.body);
    const zodParsedData =
      userValidation.userValidationSchema.parse(studentData);

    const result = await UserService.createStudentIntoDB(password, studentData);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Student is Created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const userController = {
  createStudent,
};
