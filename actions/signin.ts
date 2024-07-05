"use server";

import * as z from 'zod';
import { loginSchema } from '@/schemas';

export const signin = async (values: z.infer<typeof loginSchema>) => {
    const validatedFields = loginSchema.safeParse(values);

    if(!validatedFields.success) {
        return {error: "Invalid Credentials"};
    }

    return {success: "Success!"};
};