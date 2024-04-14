import React, { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";

import LabelInput from "@/components/controls/LabelInput";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput = forwardRef((props, ref) => {
	const {
		value,
		onClick,
		placeholder,
		label,
		labelProps,
		name,
		containerProps,
		...rest
	} = props;

	return (
		<LabelInput
			name={name}
			placeholder={placeholder}
			label={label}
			labelProps={labelProps}
			containerProps={containerProps}
			value={value}
			onClick={onClick}
			ref={ref}
			{...rest}
		/>
	);
});

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
			name={name}
			customInput={
				<DatePickerInput
					placeholder={placeholder}
					label={label}
					labelProps={labelProps}
					containerProps={containerProps}
					{...inputProps}
				/>
			}
			{...rest}
		/>
	);
};

export default DatePicker;
