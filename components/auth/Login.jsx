"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import Button from "@/components/button";
import Input from "@/components/controls/Input";
import Link from "next/link";
import { authenticate } from "@/app/lib/actions";

const initialState = {
	message: "",
};

const Login = () => {
	const [state, formAction] = useFormState(authenticate, initialState);

	return (
		<>
			<h2 className="m-0 mb-4 text-inherit font-medium font-inherit mq750:text-7xl mq450:text-lgi">
				Welcome back! Please Login
			</h2>
			<form
				action={formAction}
				className="flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
				<p className="text-base bg-red">{state?.message}</p>
				{/* Email input */}
				<div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
					<label
						className="text-5xl font-montserrat text-black text-left flex items-center box-border mq450:text-lgi"
						htmlFor="email">
						Email
					</label>

					<Input
						type="email"
						name="email"
						placeholder="Enter your email"
						required
					/>
				</div>

				{/* Password input */}
				<div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
					<label
						className="text-5xl font-montserrat text-black text-left flex items-center box-border pr-5 mq450:text-lgi"
						htmlFor="password">
						Password
					</label>
					<Input
						type="password"
						name="password"
						placeholder="Enter your password"
						required
					/>
				</div>

				{/* Submit button */}
				<div className="w-full">
					<LoginButton />
				</div>

				{/* Login link */}
				<div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
					<div className="relative text-xl font-montserrat text-black text-left mq450:text-base">
						Don&apos;t have an account?
						<Link href="/register" legacyBehavior>
							<span className="text-crimson-200 hover:underline">Register</span>
						</Link>
					</div>
				</div>
			</form>
		</>
	);
};

function LoginButton() {
	const { pending } = useFormStatus();
	return (
		<Button
			text={pending ? "Loading..." : "Login"}
			disabled={pending}
			type="submit"
			className="w-full bg-crimson-100 text-white rounded-md"
		/>
	);
}

export default Login;
