import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Minium 8 characters"),
})

export const registerSchema = z.object({
  name: z.string().trim().min(3, 'Required'),
  email: z.string().email(),
  password: z.string().min(8, "Minium 8 characters"),
})