import React from "react";

const Message = ({ severity, children }) => {
	let backgroundColor, borderColor, textColor;

	switch (severity) {
		case "error":
			backgroundColor = "bg-red-100";
			borderColor = "border-red-500";
			textColor = "text-red-800";
			break;
		case "warning":
			backgroundColor = "bg-yellow-100";
			borderColor = "border-yellow-500";
			textColor = "text-yellow-800";
			break;
		case "info":
			backgroundColor = "bg-blue-100";
			borderColor = "border-blue-500";
			textColor = "text-blue-800";
			break;
		default:
			backgroundColor = "bg-gray-100";
			borderColor = "border-gray-500";
			textColor = "text-gray-800";
	}

	return (
		<div
			className={`text-lgi w-full p-2 border-l-4 ${borderColor} ${backgroundColor} ${textColor}`}>
			{children}
		</div>
	);
};

export default Message;
