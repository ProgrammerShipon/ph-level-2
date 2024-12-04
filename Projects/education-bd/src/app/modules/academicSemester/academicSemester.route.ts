import { Router } from "express";
import { academicController } from "./academicSemester.controller";

const router = Router();

router.post(
  "/create-academic-semester",
  academicController.createAcademicSemester
);

export const AcademicSemesterRoutes = router;
