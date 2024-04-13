import React from "react";
import Register from "@/components/auth/Register";

const page = () => {
	return (
		<>
			<h2 className="m-0 relative text-inherit font-medium font-inherit mq750:text-7xl mq450:text-lgi">
				Let&apos;s begin your wonderful journey!
			</h2>
			<Register />
		</>
	);
};

export default page;
