"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(prevState, formData) {
	try {
		await signIn("credentials", formData);
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { message: "Invalid credentials." };
				default:
					return { message: "Something went wrong!" };
			}
		}
		throw error;
	}
}
