const ImageLayout = ({ children, imagePath }) => {
	return (
		<div className="w-full h-[100vh] bg-white flex flex-row items-center justify-center leading-[normal] tracking-[normal] text-left text-13xl text-crimson-100 font-montserrat mq750:gap-[41px] mq450:gap-[20px] mq1225:flex-wrap mq1225:gap-[81px]">
			<div className="flex-1 h-[100%] w-[100%]">
				<img
					className="object-cover object-center h-[100%] w-[100%]"
					loading="lazy"
					alt=""
					src={imagePath}
				/>
			</div>
			<div className="flex-1 flex flex-row pb-[1rem] items-start justify-center pt-0 px-0 box-border max-w-full">
				<div className="flex flex-row items-center justify-center w-full">
					<div className="flex-1 w-full flex flex-col justify-center items-center">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageLayout;
