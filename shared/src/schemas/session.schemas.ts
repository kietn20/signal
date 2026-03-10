// File: shared/src/schemas/session.schemas.ts
import { z } from 'zod';

export const CreateSessionSchema = z.object({
  title: z.string().min(1).max(100).optional(),
});

export const UpdateSessionSchema = z.object({
  title: z  .string().min(1).max(100).optional(),
  status: z.enum(['ended', 'archived']).optional(),
});

export type CreateSessionInput = z.infer<typeof CreateSessionSchema>;
export type UpdateSessionInput = z.infer<typeof UpdateSessionSchema>;