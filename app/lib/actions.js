"use server";

import { AuthError } from "next-auth";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

import { signIn, auth } from "@/auth";
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

		let q = `INSERT INTO public.users(
	user_id, email, password, name, phone_number)
	VALUES ($1, $2, $3, $4, $5);`;

		const user_id = uuidv4();

		await pool.query(q, [user_id, email, hashedPass, name, phone]);

		q = `INSERT INTO public.user_profile(user_id) VALUES($1)`;

		await pool.query(q, [user_id]);

		q = `INSERT INTO public.user_steps(user_id, step_number) VALUES ($1, $2);`;

		await pool.query(q, [user_id, 1]);

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

export async function saveStep1(prevState, formData) {
	try {
		const authState = await auth();

		const user_id = authState.user.id;
		const dob = formData.get("dob");
		const height = formData.get("height");
		const gender = formData.get("gender");

		let q = `
			UPDATE public.user_profile
				SET
					dob=$1, height=$2, gender=$3
				WHERE
					user_id=$4
		`;

		await pool.query(q, [dob, height, gender, user_id]);

		q = `
			UPDATE public.user_steps
			SET step_number=$1
			WHERE user_id=$2;
		`;

		await pool.query(q, [2, user_id]);

		return { redirect: { destination: "/onboard/step-2", permanent: false } };
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

export async function saveStep2(prevState, formData) {
	try {
		const authState = await auth();

		const user_id = authState.user.id;
		const city = formData.get("city");
		const religion = formData.get("religion");
		const sub_community = formData.get("sub_community");
		const mother_tongue = formData.get("mother_tongue");

		let q = `
			UPDATE public.user_profile
				SET
					city=$1, religion=$2, sub_community=$3, mother_tongue=$4
				WHERE
					user_id=$5
		`;

		await pool.query(q, [
			city,
			religion,
			sub_community,
			mother_tongue,
			user_id,
		]);

		q = `
			UPDATE public.user_steps
			SET step_number=$1
			WHERE user_id=$2;
		`;

		await pool.query(q, [3, user_id]);

		return { redirect: { destination: "/onboard/step-3", permanent: false } };
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

export async function saveStep3(prevState, formData) {
	try {
		const authState = await auth();

		const user_id = authState.user.id;
		const highest_qualification = formData.get("highest_qualification");
		const organization = formData.get("organization");
		const job_title = formData.get("job_title");
		const monthly_income = formData.get("monthly_income");

		let q = `
			UPDATE public.user_profile
				SET
					highest_qualification=$1, organization=$2, job_title=$3, monthly_income=$4
				WHERE
					user_id=$5
		`;

		await pool.query(q, [
			highest_qualification,
			organization,
			job_title,
			monthly_income,
			user_id,
		]);

		q = `
			UPDATE public.user_steps
			SET step_number=$1
			WHERE user_id=$2;
		`;

		await pool.query(q, [4, user_id]);

		return { redirect: { destination: "/onboard/step-4", permanent: false } };
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

export async function saveStep5(prevState, formData) {
	try {
		const authState = await auth();

		const user_id = authState.user.id;
		const from_age = formData.get("from_age");
		const to_age = formData.get("to_age");
		const from_height = formData.get("from_height");
		const to_height = formData.get("to_height");
		const religion = formData.get("religion");
		const sub_community = formData.get("sub_community");
		const mother_tongue = formData.get("mother_tongue");

		let q = `
			SELECT * FROM public.user_preferences WHERE user_id=$1
		`;

		const { rowCount } = await pool.query(q, [user_id]);

		if (!rowCount) {
			q = `
			INSERT INTO public.user_preferences(
				user_id, from_age, to_age, 
				from_height, to_height, religion, 
				sub_community, mother_tongue
			)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
		`;

			await pool.query(q, [
				user_id,
				from_age,
				to_age,
				from_height,
				to_height,
				religion,
				sub_community,
				mother_tongue,
			]);
		} else {
			q = `
				UPDATE public.user_preferences
				SET 
					from_age = $1,
					to_age = $2,
					from_height = $3,
					to_height = $4,
					religion = $5,
					sub_community = $6,
					mother_tongue = $7,
					updated_at = CURRENT_TIMESTAMP
				WHERE
					user_id = $8;
			`;

			await pool.query(q, [
				from_age,
				to_age,
				from_height,
				to_height,
				religion,
				sub_community,
				mother_tongue,
				user_id,
			]);
		}

		q = `
			UPDATE public.user_steps
			SET step_complete=$1
			WHERE user_id=$2;
		`;

		await pool.query(q, [true, user_id]);

		return { redirect: { destination: "/", permanent: false } };
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

export async function saveStep4(prevState, formData) {
	try {
		const authState = await auth();

		const user_id = authState.user.id;
		const mother_occupation = formData.get("mother_occupation");
		const father_occupation = formData.get("father_occupation");
		const num_sisters = formData.get("num_sisters");
		const num_brothers = formData.get("num_brothers");

		let q = `
			UPDATE public.user_profile
				SET
					mother_occupation=$1, father_occupation=$2, num_sisters=$3, num_brothers=$4
				WHERE
					user_id=$5
		`;

		await pool.query(q, [
			mother_occupation,
			father_occupation,
			num_sisters,
			num_brothers,
			user_id,
		]);

		q = `
			UPDATE public.user_steps
			SET step_number=$1
			WHERE user_id=$2;
		`;

		await pool.query(q, [5, user_id]);

		return { redirect: { destination: "/onboard/step-5", permanent: false } };
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
