import {z} from 'zod'

export const usernameValidation = z
   .string()
   .min(3,"username must have minimum 3 character")
   .max(20 , "username must have less than 20 characters")
   .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters");

export const signUpSchema = z.object({
    username: usernameValidation,
    password: z.string().min(6,{message:"password must have minimum 6 character"})
})