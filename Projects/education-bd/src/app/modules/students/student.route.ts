import express from "express";
import { studentController } from "./student.controller";

const router = express.Router();

router.post("/:studentId", studentController.getSingleStudent);

export const StudentRoute = router;
