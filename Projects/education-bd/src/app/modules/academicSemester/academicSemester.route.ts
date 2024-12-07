import { Router } from "express";
import { academicController } from "./academicSemester.controller";
import validateRequest from "../../middlwares/validateRequest";
import { academicSemesterValidation } from "./academicSemester.validation";

const router = Router();

// create semester
router.post(
  "/create-academic-semester",
  validateRequest(academicSemesterValidation.createAcademicSemesterValidation),
  academicController.createAcademicSemester
);

// get all academic semester
router.get("/", academicController.getAllAcademicSemester);

// single academic semester find
router.get("/:academicSemesterId", academicController.getAcademicSemester);

// update academic semester
router.patch(
  "/:academicSemesterId",
  validateRequest(academicSemesterValidation.academicSemesterUpdateValidation),
  academicController.updateAcademicSemester
);

export const AcademicSemesterRoutes = router;
