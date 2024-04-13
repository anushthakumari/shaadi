const Card = ({
	signUp,
	registerAndCreateYourMatr,
	propAlignSelf,
	propWidth,
}) => {
	const frameDivStyle = { alignSelf: propAlignSelf };

	const signUpStyle = {
		width: propWidth,
	};

	return (
		<div className="flex-1 flex flex-col items-start justify-start py-4 px-0 box-border gap-[20px] min-w-[270px] max-w-full z-[1] text-center text-13xl text-crimson-100 font-montserrat">
			<div className="self-stretch h-40 flex flex-row items-start justify-center py-0 px-5 box-border">
				<div className="self-stretch w-40 flex flex-row items-center justify-center relative gap-[10px]">
					<div className="self-stretch flex-1 relative rounded-[50%] bg-white" />
					<img
						className="h-[100px] w-[100px] absolute !m-[0] top-[30px] left-[25px] object-cover z-[1]"
						loading="lazy"
						alt=""
						src="/add-user-male@2x.png"
					/>
				</div>
			</div>
			<div
				className="self-stretch flex flex-row items-start justify-center py-0 px-5"
				style={frameDivStyle}>
				<div
					className="w-[130px] relative font-semibold flex items-center justify-center whitespace-nowrap mq800:text-7xl mq450:text-lgi"
					style={signUpStyle}>
					{signUp}
				</div>
			</div>
			<div className="self-stretch relative text-5xl text-black mq450:text-lgi">
				{registerAndCreateYourMatr}
			</div>
		</div>
	);
};

export default Card;
