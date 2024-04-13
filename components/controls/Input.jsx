import React, { forwardRef } from "react";

const Input = forwardRef(({ className, ...props }, ref) => {
	return (
		<input
			className={`self-stretch rounded-3xs bg-white box-border py-3 px-4 max-w-full border-[1px] border-solid border-crimson-100 text-xl font-light font-montserrat text-crimson-300 text-left ${className}`}
			{...props}
			ref={ref}
		/>
	);
});

Input.displayName = "Input";
export default Input;
