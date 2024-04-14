const AuthLayout = ({ children }) => {
	return (
		<div className="w-full max-h-[120vh] bg-white flex flex-row leading-[normal] tracking-[normal] text-left text-13xl text-crimson-100 font-montserrat mq750:gap-[41px] mq450:gap-[20px] mq1225:flex-wrap mq1225:gap-[81px]">
			<div className="flex-1">
				<img
					className="object-cover object-center h-full w-full"
					loading="lazy"
					alt=""
					src="/rectangle-151@2x.png"
				/>
			</div>
			<div className="flex-1 box-border max-w-full">{children}</div>
		</div>
	);
};

export default AuthLayout;
