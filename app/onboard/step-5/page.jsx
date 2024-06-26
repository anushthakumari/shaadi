"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import Button from "@/components/button";
import LabelSelect from "@/components/controls/LabelSelect";
import { saveStep5 } from "@/app/lib/actions";

import validData from "@/constants/validData";

const ageOptions = validData.AGES.map((v) => ({
	label: v,
	value: v,
}));

const initialState = {
	message: "",
};

const Step5 = () => {
	const [state, formAction] = useFormState(saveStep5, initialState);
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
		window.location.href = "/";
	}

	return (
		<div>
			<h2 className="m-0 relative text-inherit font-medium font-inherit mq750:text-7xl mq450:text-lgi">
				Setting preferences for your partner
			</h2>
			<form
				className="mt-8 self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full"
				action={formAction}>
				<div className="w-full flex flex-row gap-2 items-center justiy-between">
					<div className="flex-1">
						<LabelSelect
							id="from_age-selection"
							name="from_age"
							label={"From Age"}
							value={formData.from_age}
							options={ageOptions}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="flex-1">
						<LabelSelect
							id="to_age-selection"
							name="to_age"
							label={"To Age"}
							value={formData.to_age}
							options={ageOptions}
							onChange={handleInputChange}
							required
						/>
					</div>
				</div>
				<div className="w-full flex flex-row gap-2 items-center justiy-between">
					<div className="flex-1">
						<LabelSelect
							id="from_height-selection"
							name="from_height"
							label={"From Height"}
							value={formData.from_height}
							options={validData.HEIGHTS}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="flex-1">
						<LabelSelect
							id="to_height-selection"
							name="to_height"
							label={"To Height"}
							value={formData.to_height}
							options={validData.HEIGHTS}
							onChange={handleInputChange}
							required
						/>
					</div>
				</div>
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
			text={pending ? "Loading..." : "Finish"}
			disabled={pending}
			type="submit"
			className="w-full bg-crimson-100 text-white rounded-md"
		/>
	);
}

export default Step5;
