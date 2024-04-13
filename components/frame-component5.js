import React, { useState } from "react";
import Button from "./button";
import Link from "next/link";

const FrameComponent5 = () => {
    // Form state
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted with data:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
            {/* Email input */}
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <label
                    className="w-[271px] relative text-5xl font-montserrat text-black text-left flex items-center box-border pr-5 mq450:text-lgi"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="self-stretch h-[74px] rounded-3xs bg-white box-border py-6 px-8 max-w-full border-[1px] border-solid border-crimson-100 text-xl font-light font-montserrat text-crimson-300 text-left"
                    required // Ensure the field is required
                />
            </div>

            {/* Password input */}
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <label
                    className="w-[271px] relative text-5xl font-montserrat text-black text-left flex items-center box-border pr-5 mq450:text-lgi"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="self-stretch h-[74px] rounded-3xs bg-white box-border py-6 px-8 max-w-full border-[1px] border-solid border-crimson-100 text-xl font-light font-montserrat text-crimson-300 text-left"
                    required // Ensure the field is required
                />
            </div>

            {/* Submit button */}
            <div className="w-full">
                <Button
                    text="Login" // Use the text prop for the button
                    type="submit" // Set button type to submit
                    className="w-full py-4 bg-crimson-100 text-white rounded-md"
                />
            </div>

            {/* Login link */}
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
        <div className="relative text-xl font-montserrat text-black text-left mq450:text-base">
          Don't have an account?
          <Link href="/register-page" legacyBehavior>
            <span className="text-crimson-200 hover:underline">Register</span>
          </Link>
        </div>
      </div>
        </form>
    );
};

export default FrameComponent5;
