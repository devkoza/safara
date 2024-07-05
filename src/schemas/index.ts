import * as z from "zod";

export const loginSchema = z.object({
    email: z
      .string()
      .min(1, { message: 'The email is required.' })
      .email({ message: 'The email is invalid.' }),
    password: z
      .string()
      .min(8, { message: 'Password must be 8 character long.' }),
    remember: z.boolean(),
  });
  
  export const signUpSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z
      .string()
      .min(1, 'The email is required.')
      .email({ message: 'The email is invalid.' }),
    password: z
      .string()
      .min(8, { message: 'Password must be 8 character long.' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Password must be 8 character long.' }),
    acceptPolicy: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ['confirmPassword'],
  });

  
