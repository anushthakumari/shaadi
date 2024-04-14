"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import Button from "@/components/button";
import LabelInput from "@/components/controls/LabelInput";
import { saveStep3 } from "@/app/lib/actions";

const initialState = {
	message: "",
};

const Step3 = () => {
	const [state, formAction] = useFormState(saveStep3, initialState);
	const router = useRouter();

	// Initialize state for form inputs
	const [formData, setFormData] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	if (state.redirect) {
		alert("Saved successfully!");
		router.push(state.redirect.destination);
	}

	return (
		<div>
			<h2 className="m-0 relative text-inherit font-medium font-inherit mq750:text-7xl mq450:text-lgi">
				Tell us more about yourself
			</h2>
			<form
				className="mt-8 self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full"
				action={formAction}>
				<LabelInput
					type="text"
					name="highest_qualification"
					value={formData.highest_qualification}
					onChange={handleInputChange}
					placeholder="Highest qualification"
					label="Highest qualification"
				/>
				<LabelInput
					type="text"
					name="organization"
					value={formData.organization}
					onChange={handleInputChange}
					placeholder="Organization you are working at"
					label="Organization you are working at"
				/>
				<LabelInput
					type="text"
					name="job_title"
					value={formData.job_title}
					onChange={handleInputChange}
					placeholder="You are working as a"
					label="You are working as a"
				/>
				<LabelInput
					type="number"
					name="monthly_income"
					value={formData.monthly_income}
					onChange={handleInputChange}
					placeholder="Monthly income"
					label="Monthly income"
				/>

				{/* Next button */}
				<NextButton />
			</form>
		</div>
	);
};

function NextButton() {
	const { pending } = useFormStatus();
	return (
		<Button
			text={pending ? "Loading..." : "Next"}
			disabled={pending}
			type="submit"
			className="w-full bg-crimson-100 text-white rounded-md"
		/>
	);
}

export default Step3;
