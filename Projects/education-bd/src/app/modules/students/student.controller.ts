import { NextFunction, Request, Response } from "express";
import { studentService } from "./student.service";
import sendResponse from "../../utils/sendResponse";

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentDB(studentId);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Student is retrieved succesfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const result = await
  } catch (err) {
    next(err);
  }
};

export const studentController = {
  getSingleStudent,
  getAllStudents,
};
