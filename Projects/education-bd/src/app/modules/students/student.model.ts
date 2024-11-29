import { model, Schema } from "mongoose";
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from "./student.interface";

const userNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent>({
  id: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User id is required"],
    unique: true,
    ref: "User",
  },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// virtual name
studentSchema.virtual("fullName").get(function () {
  return this.name.firstName + this.name.middleName + this.name.lastName;
});

// Query Middleware
studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
});

// Query Middleware
studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
});

studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });

  next();
});

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await StudentModel.findOne({ id });
  return existingUser;
};

export const StudentModel = model<TStudent>("Student", studentSchema);
