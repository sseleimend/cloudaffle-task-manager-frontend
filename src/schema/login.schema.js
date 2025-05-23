import { z } from "zod";

export const SignupSchema = z.object({
  email: z.string().email({
    message: "Invalid email format",
  }),
  password: z.string(),
});
