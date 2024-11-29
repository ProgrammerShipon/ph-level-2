import { z } from "zod";

const userValidationSchema = z.object({
  // id: z.string(), // auto generate
  password: z
    .string()
    .max(20, { message: "Password can not be more than 20 characters" })
    .optional(),
  // needsPasswordChange: z.boolean().optional(), // don't need to client
  // role: z.enum(["student", "faculty", "admin"]), // set endpoint
  // status: z.enum(["in-progress", "blocked"]).default("in-progress"), // don't need to client
  // isDeleted: z.boolean().optional().default(false), // don't need to client
});

export const userValidation = {
  userValidationSchema,
};
