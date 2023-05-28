import { z } from 'zod';

export const validName = new RegExp('^[A-Za-z][A-Za-z0-9_]{3,24}$');

export const RegisterSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email.' })
    .min(1, { message: 'Email is required.' })
    .max(56, { message: 'Email can not be longer than 56 characters.' }),
  password: z
    .string()
    .min(6, { message: 'Password needs to be at least 6 characters long.' })
    .max(56, { message: 'Password can not be longer than 56 characters.' }),
  name: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters long.' })
    .max(32, { message: 'Name can not be longer than 32 characters.' })
    .regex(validName, {
      message: 'Name must not contain special characters or spaces.',
    }),
});

export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email.' })
    .min(1, { message: 'Email is required.' })
    .max(56, { message: 'Email can not be longer than 56 characters.' }),
  password: z
    .string()
    .min(1, { message: 'Password is required.' })
    .max(56, { message: 'Password can not be longer than 56 characters.' }),
});
