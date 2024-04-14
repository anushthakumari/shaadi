"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import LabelInput from "@/components/controls/LabelInput";
import Button from "@/components/button";
import Message from "@/components/Message";
import FieldError from "@/components/FieldError";

import { register } from "@/app/lib/actions";

const initialState = {
	message: "",
};

const Register = () => {
	const [state, formAction] = useFormState(register, initialState);
	const router = useRouter();

	if (state.redirect) {
		router.push(state.redirect.destination);
	}

	return (
		<form
			action={formAction}
			className="flex flex-col gap-[32px] max-w-full mq750:gap-[16px]">
			{state?.message ? (
				<Message severity={"error"}>{state.message}</Message>
			) : null}
			<div>
				<LabelInput
					label="Enter the Name"
					placeholder="Enter your name"
					name="name"
					type="text"
					required
				/>
				<FieldError errors={state.errors?.name} />
			</div>
			<div>
				<LabelInput
					label="Enter the Email"
					placeholder="Enter your name"
					name="email"
					type="email"
					required
				/>
				<FieldError errors={state.errors?.email} />
			</div>
			<div>
				<LabelInput
					label="Enter the Phone No"
					placeholder="Enter your phone no."
					name="phone"
					type="number"
					maxLength="10"
					required
				/>
				<FieldError errors={state.errors?.phone} />
			</div>

			<div>
				<LabelInput
					label="Enter the Password"
					placeholder="Enter your password"
					name="password"
					type="password"
					required
				/>
				<FieldError errors={state.errors?.password} />
			</div>

			<div>
				<LabelInput
					label="Confirm Password"
					placeholder="Confirm Password"
					name="cpassword"
					type="password"
					required
				/>
				<FieldError errors={state.errors?.cpassword} />
			</div>

			{/* Register button */}
			<div className="w-full">
				<RegisterButton />
			</div>

			{/* Login link */}
			<div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
				<div className="relative text-xl font-montserrat text-black text-left mq450:text-base">
					Already have an account?
					<Link href="/login-page" legacyBehavior>
						<span className="text-crimson-200 hover:underline">Login</span>
					</Link>
				</div>
			</div>
		</form>
	);
};

function RegisterButton() {
	const { pending } = useFormStatus();
	return (
		<Button
			text={pending ? "Loading..." : "Register"}
			disabled={pending}
			type="submit"
			className="w-full bg-crimson-100 text-white rounded-md"
		/>
	);
}

export default Register;
