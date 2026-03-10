import { z } from 'zod';

export const RegisterSchema = z.object({
  email: z
    .string()
    .email('Must be a valid email address')
    .toLowerCase()
    .max(255, 'Email too long'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(72, 'Password too long'),
  displayName: z
    .string()
    .min(1)
    .max(50)
    .optional(),
});

export const LoginSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z.string().min(1, 'Password is required'),
});

export const RefreshTokenSchema = z.object({
  refreshToken: z.string().min(1),
});

// Infer TypeScript types directly from the Zod schemas
// This is the key pattern — one definition, one type, one validator
export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput    = z.infer<typeof LoginSchema>;