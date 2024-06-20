import { z } from 'zod';

export const userAuthSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' })
});

export const userRegisterSchema = z
  .object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
    alias: z.string().min(3, { message: 'Alias must be at least 5 characters' }),
    email: z.string().email({ message: 'Invalid email' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    repeatPassword: z.string().min(6, { message: 'Password must be at least 6 characters' })
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword']
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Invalid email' })
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    repeatPassword: z.string().min(6, { message: 'Password must be at least 6 characters' })
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword']
  });

export const userGeneralTabSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  alias: z.string().min(3, { message: 'Alias must be at least 5 characters' }),
  about: z
    .string()
    .min(50, { message: 'About must be at least 50 characters' })
    .max(200, { message: 'About must be at most 200 characters' })
});

export const userSocialTabSchema = z.object({
  facebook: z
    .string()
    .optional()
    .refine((link) => (link && link.startsWith('https://www.facebook.com/')) || !link, {
      message: 'Invalid Facebook link'
    }),
  twitter: z
    .string()
    .optional()
    .refine((link) => (link && link.startsWith('https://twitter.com/')) || !link, {
      message: 'Invalid Twitter link'
    }),

  instagram: z
    .string()
    .optional()
    .refine((link) => (link && link.startsWith('https://www.instagram.com/')) || !link, {
      message: 'Invalid Instagram link'
    }),
  linkedin: z
    .string()
    .optional()
    .refine((link) => (link && link.startsWith('https://www.linkedin.com/')) || !link, {
      message: 'Invalid Linkedin link'
    }),
  github: z
    .string()
    .optional()
    .refine((link) => (link && link.startsWith('https://github.com/')) || !link, {
      message: 'Invalid Github link'
    })
});

export const userPasswordTabSchema = z
  .object({
    oldPassword: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    repeatPassword: z.string(),
    newPassword: z.string().min(6, { message: 'Password must be at least 6 characters' })
  })
  .refine((data) => data.newPassword === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword']
  });
