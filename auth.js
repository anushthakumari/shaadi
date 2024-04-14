import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcrypt";

import { authConfig } from "@/auth.config";
import db from "@/db";

async function getUser(email) {
	try {
		const { rows, rowCount } = await db.query(
			`SELECT * FROM users WHERE email=$1`,
			[email]
		);

		if (!rowCount) {
			return null;
		}

		return rows[0];
	} catch (error) {
		console.error("Failed to fetch user:", error);
		throw new Error("Failed to fetch user.");
	}
}

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string().min(6) })
					.safeParse(credentials);

				if (parsedCredentials.success) {
					const { email, password } = parsedCredentials.data;
					const user = await getUser(email);
					if (!user) return null;
					const passwordsMatch = await bcrypt.compare(password, user.password);

					if (passwordsMatch) return { ...user, id: user.user_id };
				}

				return null;
			},
		}),
	],

	callbacks: {
		async jwt(d) {
			if (d.user) {
				d.token.id = d.user.user_id;
				d.token.role = "user";
			}
			return d.token;
		},

		async session(d) {
			d.session.user.id = d.token.id;
			d.session.user.role = d.token.role;
			return d.session;
		},
	},
});
