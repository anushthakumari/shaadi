import React from "react";

const Footer = () => {
	return (
		<footer className="self-stretch bg-crimson-100 flex flex-row items-start justify-between pt-[37px] px-[181px] pb-[38px] box-border max-w-full gap-[20px] text-left text-29xl text-white font-montaga mq800:pl-[90px] mq800:pr-[90px] mq800:box-border mq1125:flex-wrap mq1125:justify-center mq450:pl-5 mq450:pr-5 mq450:box-border">
			<div className="h-[132px] w-[1440px] relative bg-crimson-100 hidden max-w-full" />
			<h3 className="m-0 w-[348px] relative text-inherit font-normal font-inherit flex items-center shrink-0 max-w-full z-[1] mq800:text-19xl mq450:text-10xl">
				FYP
			</h3>
			<div className="w-[210px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border text-center text-5xl font-montserrat">
				<div className="self-stretch relative z-[1] mq450:text-lgi">
					© Copyright 2024
				</div>
			</div>
		</footer>
	);
};

export default Footer;
