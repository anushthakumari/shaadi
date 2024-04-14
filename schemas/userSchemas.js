import { z } from "zod";

export const userSchema = z.object({
	email: z.string().email({
		invalid_type_error: "Invalid Email",
	}),
	name: z.string().max(16),
	phone: z.string().min(10),
	password: z.string().min(6).max(16),
	cpassword: z.string().min(6).max(16),
});
