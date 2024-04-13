import React from "react";

const Button = ({
	text,
	onClick,
	type = "button",
	className = "",
	styles = {},
	children,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`w-[100%] rounded-8xs bg-crimson-100 overflow-hidden shrink-0 flex flex-row items-center justify-center py-[10px] box-border whitespace-nowrap z-[2] text-left text-5xl text-white font-montserrat mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
			style={styles}>
			{text ? text : children}
		</button>
	);
};

export default Button;
