import { forwardRef } from "react";

import Input from "@/components/controls/Input";

const LabelInput = forwardRef(
	(
		{
			label,
			placeholder,
			name,
			type = "text",
			value,
			onChange,
			containerProps,
			labelProps,
			...rest
		},
		ref
	) => {
		return (
			<div
				className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-5xl text-black font-montserrat"
				{...containerProps}>
				{/* Display the label for the input field */}
				<label
					htmlFor={name}
					className="w-full relative text-xl font-montserrat text-black text-left flex items-center"
					{...labelProps}>
					{label}
				</label>
				{/* Input element */}
				<Input
					id={name}
					type={type}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					{...rest}
					ref={ref}
				/>
			</div>
		);
	}
);

LabelInput.displayName = "LabelInput";

export default LabelInput;
