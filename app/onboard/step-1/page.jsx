"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import Button from "@/components/button";
import Avatar from "@/components/Avatar";
import LabelSelect from "@/components/controls/LabelSelect";
import DatePicker from "@/components/controls/DatePicker";

import validData from "@/constants/validData";
import { saveStep1 } from "@/app/lib/actions";

const initialState = {
	message: "",
};

const Step1 = () => {
	const [state, formAction] = useFormState(saveStep1, initialState);
	const router = useRouter();

	// Initialize state for form inputs
	const [formData, setFormData] = useState({
		age: "",
		height: "",
		gender: "",
		profilePicture: null,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleProfilePictureChange = (e) => {
		const file = e.target.files[0];
		setFormData((prevFormData) => ({
			...prevFormData,
			profilePicture: file,
		}));
	};

	if (state.redirect) {
		alert("Saved successfully!");
		router.push(state.redirect.destination);
	}

	return (
		<div>
			<h2 className="m-0 relative text-inherit font-medium font-inherit mq750:text-7xl mq450:text-lgi">
				Let&apos;s first create your profile
			</h2>
			<form
				className="m-0 self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full"
				action={formAction}>
				<div className="w-[100%] mt-2 flex flex-col gap-2 items-center justify-center">
					<p className="text-xl">Upload Your Photo</p>
					<label htmlFor="avatar-upload">
						<Avatar
							size={100}
							imageUrl={
								formData.profilePicture
									? URL.createObjectURL(formData.profilePicture)
									: "/add-user-male@2x.png"
							}
						/>
					</label>
					<input
						id="avatar-upload"
						onChange={handleProfilePictureChange}
						type="file"
						accept="image/*"
						hidden
					/>
				</div>

				{/* Height and gender input */}
				<div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[32px] max-w-full mq750:gap-[16px]">
					{/* Age input */}
					<DatePicker
						selected={formData.dob}
						wrapperClassName="w-full"
						dateFormat={"YYYY-MM-dd"}
						maxDate={new Date("2000-04-01")}
						showYearDropdown
						scrollableYearDropdown
						dateFormatCalendar="MMMM"
						openToDate={new Date("1990-04-01")}
						label={"Enter Date Of Birth"}
						placeholder={"Enter Date Of Birth"}
						name="dob"
						onChange={(date) =>
							handleInputChange({
								target: {
									name: "dob",
									value: date,
								},
							})
						}
					/>

					<LabelSelect
						label="Enter your height"
						placeholder="Enter your height"
						name="height"
						value={formData.height}
						onChange={handleInputChange}
						options={validData.HEIGHTS}
						required
					/>

					<LabelSelect
						id="gender-selection"
						name="gender"
						label={"Select Gender"}
						options={[
							{ value: "1", label: "Male" },
							{ value: "2", label: "Female" },
						]}
						onChange={handleInputChange}
					/>
				</div>

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

export default Step1;
