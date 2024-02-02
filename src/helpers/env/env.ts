import { z } from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3333),
  EMAIL_USER: z.string(),
  EMAIL_PASS: z.string(),
});

export type Env = z.infer<typeof envSchema>;
