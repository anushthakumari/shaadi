"use client";

import React, { useState } from "react";
import Button from "@/components/button";
import LabelInput from "@/components/controls/LabelInput";

const Step3 = ({ onFormSubmit }) => {
	// Initialize state for form inputs
	const [formData, setFormData] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onFormSubmit(formData);
	};

	return (
		<div>
			<h2 className="m-0 relative text-inherit font-medium font-inherit mq750:text-7xl mq450:text-lgi">
				Tell us more about yourself
			</h2>
			<form
				className="mt-8 self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full"
				onSubmit={handleSubmit}>
				<LabelInput
					type="text"
					name="qualificatio"
					value={formData.qualificatio}
					onChange={handleInputChange}
					placeholder="Highest qualification"
					label="Highest qualification"
				/>
				<LabelInput
					type="text"
					name="org"
					value={formData.org}
					onChange={handleInputChange}
					placeholder="Organization you are working at"
					label="Organization you are working at"
				/>
				<LabelInput
					type="text"
					name="job_role"
					value={formData.job_role}
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
				<Button text="Next" type="submit" />
			</form>
		</div>
	);
};

export default Step3;
