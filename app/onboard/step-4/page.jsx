"use client";

import React, { useState } from "react";
import Button from "@/components/button";
import LabelInput from "@/components/controls/LabelInput";

const Step4 = ({ onFormSubmit }) => {
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
				Add your family details
			</h2>
			<form
				className="mt-8 self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full"
				onSubmit={handleSubmit}>
				<LabelInput
					type="text"
					name="mother_details"
					value={formData.mother_details}
					onChange={handleInputChange}
					placeholder="Mother's details"
					label="Mother's details"
				/>
				<LabelInput
					type="text"
					name="father_details"
					value={formData.father_details}
					onChange={handleInputChange}
					placeholder="Father's details"
					label="Father's details"
				/>
				<LabelInput
					type="number"
					name="n_sisters"
					value={formData.n_sister}
					onChange={handleInputChange}
					placeholder="No Of Sisters"
					label="No Of Sisters"
				/>
				<LabelInput
					type="number"
					name="n_brothers"
					value={formData.n_sister}
					onChange={handleInputChange}
					placeholder="No of brothers"
					label="No of brothers"
				/>

				{/* Next button */}
				<Button text="Next" type="submit" />
			</form>
		</div>
	);
};

export default Step4;
