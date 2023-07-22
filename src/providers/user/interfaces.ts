import { z } from "zod";
export const userSchema = z.object({
  name: z.string(),
  email: z
    .string()
    .email("formato de email inválido")
    .nonempty("email deve ser informado"),
  password: z
    .string()
    .min(4, "deve conter ao mínimo 4 caracteres")
    .nonempty("senha deve ser preenchida"),
});
export const loginSchema = userSchema.omit({ name: true });

export type LoginData = z.infer<typeof loginSchema>;
export type UserData = z.infer<typeof userSchema>;
