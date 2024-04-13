"use client";

import { useState } from "react";
import Link from "next/link";
import LabelInput from "@/components/controls/LabelInput";
import Button from "@/components/button";

const Register = () => {
	// State to manage form data
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
	});

	// Function to handle form submission
	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent default form submission behavior

		// Handle form data submission logic here
		console.log("Form data submitted:", formData);
		// Add your submission logic here (e.g., API call)
	};

	// Function to handle input changes
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]" // Updated class for consistent font size, color, and alignment
		>
			<LabelInput
				label="Enter the Name"
				placeholder="Enter your name"
				name="name"
				type="text"
				value={formData.name}
				onChange={handleInputChange}
			/>
			<LabelInput
				label="Enter the Email"
				placeholder="Enter your name"
				name="email"
				type="email"
				value={formData.name}
				onChange={handleInputChange}
			/>
			<LabelInput
				label="Enter the Phone No"
				placeholder="Enter your phone no."
				name="phone"
				type="text"
				value={formData.phone}
				onChange={handleInputChange}
			/>
			<LabelInput
				label="Enter the Password"
				placeholder="Enter your password"
				name="password"
				type="password"
				value={formData.password}
				onChange={handleInputChange}
			/>

			{/* Register button */}
			<div className="w-full">
				<Button text="Register" type="submit" />
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

export default Register;
