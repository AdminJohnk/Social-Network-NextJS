import { z } from 'zod';

export const userAuthSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters' }),
  password: z
    .string()
    .min(6, { message: 'Confirm password must be at least 6 characters' })
});
