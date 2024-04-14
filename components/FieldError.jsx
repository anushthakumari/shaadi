import React from "react";

const FieldError = ({ errors }) => {
	if (!errors) {
		return null;
	}
	return (
		<div>
			{errors.length > 0 && (
				<div className="text-red-500 text-lgi mt-1">
					<ul>
						{errors.map((errorMessage, index) => (
							<li key={index + errorMessage}>{errorMessage}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default FieldError;
