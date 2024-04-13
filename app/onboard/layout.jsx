import React from "react";

import ImageLayout from "@/components/layouts/ImageLayout";

const OnboardLayout = ({ children }) => {
	return (
		<ImageLayout imagePath={"/rectangle-15@2x.png"}>{children}</ImageLayout>
	);
};

export default OnboardLayout;
