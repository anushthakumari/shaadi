"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import Button from "@/components/button";
import LabelInput from "@/components/controls/LabelInput";
import LabelSelect from "@/components/controls/LabelSelect";

import validData from "@/constants/validData";
import { saveStep2 } from "@/app/lib/actions";

const initialState = {
	message: "",
};

const Step2 = () => {
	const [state, formAction] = useFormState(saveStep2, initialState);
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
				Fill up your basic details
			</h2>
			<form
				className="mt-8 self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full"
				action={formAction}>
				<LabelInput
					type="text"
					name="city"
					value={formData.city}
					onChange={handleInputChange}
					placeholder="City you live in"
					label="City you live in"
					required
				/>
				<LabelSelect
					id="religion-selection"
					name="religion"
					label={"Religion"}
					value={formData.religion}
					options={validData.RELIGIONS}
					onChange={handleInputChange}
					required
				/>
				<LabelSelect
					name="sub_community"
					value={formData.sub_community}
					onChange={handleInputChange}
					options={validData.MOTHER_TONGUES}
					placeholder="Sub-community"
					label="Sub-community"
					required
				/>
				<LabelSelect
					name="mother_tongue"
					value={formData.mother_tongue}
					options={validData.MOTHER_TONGUES}
					onChange={handleInputChange}
					placeholder="Mother tongue"
					label="Mother tongue"
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

export default Step2;
