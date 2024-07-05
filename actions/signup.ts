"use server";

import * as z from 'zod';
import { signUpSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { getUserByEmail } from 'data/user';

export const signup = async (values: z.infer<typeof signUpSchema>) => {
    const validatedFields = signUpSchema.safeParse(values);

    if(!validatedFields.success) {
        return {error: "Invalid Credentials"};
    }

    const { firstName, lastName, password, email } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already in use!"};
    }

    await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            password: hashedPassword,
        },
    });

// Send verification token email

    return {success: "User Created!"};
};