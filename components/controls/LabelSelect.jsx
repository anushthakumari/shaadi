import Select from "@/components/controls/Select";

const LabelSelect = ({
	label,
	name,
	value,
	onChange,
	options,
	labelProps = {},
	containerProps = {},
	...rest
}) => {
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
			<Select
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				options={options}
				{...rest}
			/>
		</div>
	);
};

export default LabelSelect;
