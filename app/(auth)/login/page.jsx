import React from "react";

import Login from "@/components/auth/Login";

const LoginPage = () => {
	return (
		<div className="h-full mt-12 p-8">
			<h2 className="text-inherit font-medium font-inherit mq750:text-7xl mq450:text-lgi">
				Welcome back! Please Login
			</h2>
			<div className="pt-6">
				<Login />
			</div>
		</div>
	);
};

export default LoginPage;
