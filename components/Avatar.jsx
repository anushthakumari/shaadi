import React from "react";

const Avatar = ({ imageUrl, altText, size, onClick }) => {
	return (
		<img
			src={imageUrl}
			alt={altText}
			className="rounded-full cursor-pointer border-4 p-2"
			style={{ width: size, height: size }}
			onClick={onClick}
		/>
	);
};

export default Avatar;
