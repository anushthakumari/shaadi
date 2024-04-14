import React from "react";
import Register from "@/components/auth/Register";

const page = () => {
	return (
		<div className="p-8">
			<h2 className="text-inherit font-medium font-inherit mq750:text-7xl mq450:text-lgi">
				Let&apos;s begin your wonderful journey!
			</h2>
			<div className="pt-8">
				<Register />
			</div>
		</div>
	);
};

export default page;
