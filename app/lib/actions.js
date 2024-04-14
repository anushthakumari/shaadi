"use server";

import { AuthError } from "next-auth";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

import { signIn } from "@/auth";
import db from "@/db";
import { userSchema } from "@/schemas/userSchemas";
import pool from "@/db";

async function getUser({ email = "", phone = "" }) {
	const { rows, rowCount } = await db.query(
		`SELECT * FROM users WHERE ${email ? "email" : "phone_number"}=$1`,
		[email ? email : phone]
	);

	if (!rowCount) {
		return null;
	}

	return rows[0];
}

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

export async function register(prevState, formData) {
	try {
		const email = formData.get("email");
		const name = formData.get("name");
		const phone = formData.get("phone");
		const password = formData.get("password");
		const cpassword = formData.get("cpassword");

		const validatedFields = userSchema.safeParse({
			email: email,
			name: name,
			phone: phone,
			password: password,
			cpassword: cpassword,
		});

		if (!validatedFields.success) {
			return {
				errors: validatedFields.error.flatten().fieldErrors,
			};
		}

		if (password !== cpassword) {
			return {
				errors: {
					cpassword: ["Passwords do not match!"],
				},
			};
		}

		let user = await getUser({ email });

		if (user) {
			return {
				message: "User with this email already exists!",
			};
		}

		user = await getUser({ phone });

		if (user) {
			return {
				message: "User with this phone number already exists!",
			};
		}

		const hashedPass = await bcrypt.hash(password, 10);

		const q = `INSERT INTO public.users(
	user_id, email, password, name, phone_number)
	VALUES ($1, $2, $3, $4, $5);`;

		const user_id = uuidv4();

		await pool.query(q, [user_id, email, hashedPass, name, phone]);

		return { redirect: { destination: "/login", permanent: false } };
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
