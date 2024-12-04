import express from "express";
import { studentController } from "./student.controller";
import validateRequest from "../../middlwares/validateRequest";
import { createStudentValidationSchema } from "./student.validation";

const router = express.Router();

router.post(
  "/:studentId",
  validateRequest(createStudentValidationSchema),
  studentController.getSingleStudent
);

export const StudentRoute = router;
