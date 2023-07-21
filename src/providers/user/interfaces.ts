import { z } from "zod";
export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});
export const loginSchema = userSchema.omit({ name: true });

export type LoginData = z.infer<typeof loginSchema>;
export type UserData = z.infer<typeof userSchema>;
