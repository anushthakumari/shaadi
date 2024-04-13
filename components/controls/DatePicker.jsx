import React, { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";

import LabelInput from "@/components/controls/LabelInput";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput = forwardRef(
	(
		{ value, onClick, placeholder, label, labelProps, containerProps, ...rest },
		ref
	) => {
		return (
			<LabelInput
				placeholder={placeholder}
				label={label}
				labelProps={labelProps}
				containerProps={containerProps}
				value={value}
				onClick={onClick}
				ref={ref}
			/>
		);
	}
);

DatePickerInput.displayName = "DatePickerInput";

const DatePicker = ({
	name,
	placeholder,
	label,
	inputProps,
	labelProps,
	containerProps,
	...rest
}) => {
	return (
		<ReactDatePicker
			wrapperClassName="w-full"
			dateFormat={"dd/MM/YYYY"}
			customInput={
				<DatePickerInput
					name={name}
					placeholder={placeholder}
					label={label}
					inputProps={inputProps}
					labelProps={labelProps}
					containerProps={containerProps}
				/>
			}
			{...rest}
		/>
	);
};

export default DatePicker;
