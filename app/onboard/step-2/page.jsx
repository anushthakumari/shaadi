"use client";

import React, { useState } from "react";
import Button from "@/components/button";
import LabelInput from "@/components/controls/LabelInput";
import LabelSelect from "@/components/controls/LabelSelect";

import validData from "@/constants/validData";

const Step2 = ({ onFormSubmit }) => {
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
				Fill up your basic details
			</h2>
			<form
				className="mt-8 self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full"
				onSubmit={handleSubmit}>
				<LabelInput
					type="text"
					name="city"
					value={formData.city}
					onChange={handleInputChange}
					placeholder="City you live in"
					label="City you live in"
				/>
				<LabelSelect
					id="religion-selection"
					name="religion"
					label={"Religion"}
					value={formData.religion}
					options={validData.RELIGIONS}
					onChange={handleInputChange}
				/>
				<LabelSelect
					name="sub_community"
					value={formData.sub_community}
					onChange={handleInputChange}
					options={validData.MOTHER_TONGUES}
					placeholder="Sub-community"
					label="Sub-community"
				/>
				<LabelSelect
					name="mother_tongue"
					value={formData.mother_tongue}
					options={validData.MOTHER_TONGUES}
					onChange={handleInputChange}
					placeholder="Mother tongue"
					label="Mother tongue"
				/>

				{/* Next button */}
				<Button text="Next" type="submit" />
			</form>
		</div>
	);
};

export default Step2;
