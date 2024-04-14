"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import Button from "@/components/button";
import LabelInput from "@/components/controls/LabelInput";
import { saveStep4 } from "@/app/lib/actions";

const initialState = {
	message: "",
};

const Step4 = () => {
	const [state, formAction] = useFormState(saveStep4, initialState);
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
				Add your family details
			</h2>
			<form
				className="mt-8 self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full"
				action={formAction}>
				<LabelInput
					type="text"
					name="mother_occupation"
					value={formData.mother_occupation}
					onChange={handleInputChange}
					placeholder="Mother's occupation"
					label="Mother's occupation"
					required
				/>
				<LabelInput
					type="text"
					name="father_occupation"
					value={formData.father_occupation}
					onChange={handleInputChange}
					placeholder="Father's occupation"
					label="Father's occupation"
					required
				/>
				<LabelInput
					type="number"
					name="num_sisters"
					value={formData.num_sisters}
					onChange={handleInputChange}
					placeholder="No Of Sisters"
					label="No Of Sisters"
					required
				/>
				<LabelInput
					type="number"
					name="num_brothers"
					value={formData.num_brothers}
					onChange={handleInputChange}
					placeholder="No of brothers"
					label="No of brothers"
					required
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

export default Step4;
