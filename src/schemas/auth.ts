import type { InferOutput } from 'valibot'
import { email, maxLength, nonEmpty, minLength, object, pipe, string, regex } from 'valibot'

export const signUpSchema = object({
  username: pipe(
    string('Username should be a string'),
    nonEmpty('Username is required'),
    minLength(3, 'Username should be at least 3 characters'),
    maxLength(64, "Username shouldn't exceed 64 characters"),
  ),
  email: pipe(
    string('Email should be a string'),
    nonEmpty('Email is required'),
    maxLength(128, "Email shouldn't exceed 128 characters"),
    email('Email should look like: username@domain.com'),
  ),
  password: pipe(
    string('Password should be a string'),
    nonEmpty('Password is required'),
    minLength(8, 'Password should be at least 8 characters'),
    maxLength(128, "Password shouldn't exceed 128 characters"),
    regex(/^(?=.*?[A-Z]).*$/, 'Password should contain at least one uppercase letter'),
    regex(/^(?=.*?[a-z]).*$/, 'Password should contain at least one lowercase letter'),
    regex(/^(?=.*?[0-9]).*$/, 'Password should contain at least one number'),
    regex(/^(?=.*?[#?!@$%^&*-]).*$/, 'Password should contain at least one special character'),
  ),
})

export type SignUpSchema = InferOutput<typeof signUpSchema>
