import express from "express";
import { studentController } from "./student.controller";
import validateRequest from "../../middlwares/validateRequest";
import { createStudentValidationSchema } from "./student.validation";

const router = express.Router();

// get single student
router.post(
  "/:studentId",
  validateRequest(createStudentValidationSchema),
  studentController.getSingleStudent
);

// get all students
router.get("/", studentController.getAllStudents);

export const StudentRoute = router;
