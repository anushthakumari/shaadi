import React from "react";

const Select = ({ options, className, ...props }) => {
	return (
		<select
			className={`self-stretch rounded-3xs bg-white box-border py-3 px-4 max-w-full border-[1px] border-solid border-crimson-100 text-xl font-light font-montserrat text-crimson-300 text-left ${className}`}
			{...props}>
			{options.map((option, index) => (
				<option key={index} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default Select;
