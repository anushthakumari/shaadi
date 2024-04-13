import Link from "next/link";
import Button from "@/components/button";
import Card from "@/components/card";

const HomePage = () => {
	return (
		<div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[75px] px-0 pb-0 box-border gap-[126px] leading-[normal] tracking-[normal] mq800:gap-[63px] mq450:gap-[31px]">
			<img
				className="w-full h-[720px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
				alt="header image"
				src="/signupsug@2x.png"
			/>
			<section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[164px] pr-5 pl-[21px] box-border max-w-full text-left text-29xl text-white font-montaga">
				<div className="w-[1073px] flex flex-row items-end justify-between max-w-full gap-[20px] mq800:flex-wrap">
					<h3 className="m-0 w-[348px] relative text-inherit font-normal font-inherit flex items-center shrink-0 max-w-full z-[1] mq800:text-19xl mq450:text-10xl">
						FYP
					</h3>
					<div className="w-[69px] flex flex-col items-start justify-end pt-0 px-0 pb-[9.5px] box-border text-center text-5xl font-montserrat">
						<Link href="/login-page">
							<div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
								<div className="cursor-pointer self-stretch relative font-medium inline-block min-w-[69px] z-[1] mq450:text-lgi">
									Login
								</div>
								<div className="w-[70.5px] h-[1.5px] relative box-border z-[1] border-t-[1.5px] border-solid border-white" />
							</div>
						</Link>
					</div>
				</div>
			</section>
			<section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[92px] pr-[21px] pl-5 box-border max-w-full text-left text-21xl text-white font-montserrat">
				<div className="w-[1075px] rounded-3xs bg-gray flex flex-col items-center justify-start py-[47px] px-5 box-border gap-[32px] max-w-full z-[1] mq800:gap-[16px]">
					<div className="w-[1075px] h-60 relative rounded-3xs bg-gray hidden max-w-full" />
					<div className="w-[893px] relative font-semibold inline-block max-w-full z-[2] mq800:text-13xl mq450:text-5xl">{`Trusted Matrimony & Matchmaking Service`}</div>
					<div className="w-[893px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
						<Button
							text="Get Started" // Use the text prop for the button
							type="submit" // Set button type to submit
							className="self-stretch rounded-3xs bg-crimson-100 overflow-hidden flex flex-row items-start justify-center py-[16.5px] px-5 text-13xl text-white"
						/>
					</div>
				</div>
			</section>
			<section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[26px] pr-[21px] pl-5 box-border max-w-full text-center text-21xl text-white font-montserrat">
				<div className="w-[1115px] rounded-3xs bg-crimson-100 flex flex-col items-start justify-start pt-[76px] pb-[72px] pr-[27px] pl-7 box-border gap-[40px] max-w-full mq800:gap-[20px]">
					<div className="w-[1115px] h-[344px] relative rounded-3xs bg-crimson-100 hidden max-w-full" />
					<b className="self-stretch relative z-[1] mq800:text-13xl mq450:text-5xl">{`Exclusive & Personalised Matchmaking by Find Your Partner`}</b>
					<div className="w-[1049px] flex flex-row items-start justify-start py-0 px-[43px] box-border max-w-full text-5xl mq1125:pl-[21px] mq1125:pr-[21px] mq1125:box-border">
						<div className="flex-1 relative font-medium inline-block max-w-full z-[1] mq450:text-lgi">
							Are you ready to find your perfect match? Find Your Partner
							welcomes you to a world of trusted matchmaking and unparalleled
							success stories.
						</div>
					</div>
				</div>
			</section>
			<section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[77px] box-border max-w-full text-center text-29xl text-crimson-100 font-montserrat mq800:pb-8 mq800:box-border mq1125:pb-[50px] mq1125:box-border">
				<div className="self-stretch [background:linear-gradient(180deg,_rgba(203,_24,_49,_0),_rgba(196,_25,_65,_0.1)_39.25%)] flex flex-col items-center justify-start pt-[25px] px-5 pb-[156px] box-border gap-[72px] max-w-full mq800:gap-[36px] mq800:pt-5 mq800:pb-[101px] mq800:box-border mq450:gap-[18px]">
					<div className="w-[1440px] h-[699px] relative [background:linear-gradient(180deg,_rgba(203,_24,_49,_0),_rgba(196,_25,_65,_0.1)_39.25%)] hidden max-w-full" />
					<div className="w-[1176px] flex flex-row items-start justify-center max-w-full">
						<h3 className="m-0 w-[906px] relative text-inherit font-medium font-inherit flex items-center justify-center z-[1] mq800:text-19xl mq450:text-10xl">
							Find your Special Someone in 3 steps
						</h3>
					</div>
					<div className="w-[1176px] flex flex-row flex-wrap items-start justify-center gap-[48px] max-w-full text-13xl mq800:gap-[24px]">
						<Card
							signUp="Sign Up"
							registerAndCreateYourMatr="Register and create your matrimony profile to start your journey towards finding your life partner."
						/>
						<Card
							signUp={`Connect & Interact`}
							registerAndCreateYourMatr="Select and connect with matches you like. Start a conversation and take the first step."
							propAlignSelf="unset"
							propWidth="309px"
						/>
						<Card
							signUp="Find A Match"
							registerAndCreateYourMatr="Explore thousands of profiles based on mother tongue, religion, community, and more."
							propAlignSelf="unset"
							propWidth="219px"
						/>
					</div>
				</div>
				<div className="self-stretch bg-crimson-100 flex flex-row items-start justify-between pt-[95px] pb-24 pr-[204px] pl-[205px] box-border max-w-full gap-[20px] text-21xl text-white mq800:pl-[102px] mq800:pr-[102px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap">
					<div className="h-64 w-[1440px] relative bg-crimson-100 hidden max-w-full" />
					<div className="w-[641px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full">
						<div className="self-stretch relative font-medium z-[1] mq800:text-13xl mq450:text-5xl">
							Your story is waiting to happen!
						</div>
					</div>
					<Button
						text="Get Started"
						type="submit"
						className="self-stretch rounded-3xs bg-crimson-100 overflow-hidden flex flex-row items-start justify-center py-[16.5px] px-5 text-13xl text-white"
					/>
				</div>
			</section>
			<section className="self-stretch flex flex-row items-start justify-center py-0 pr-[26px] pl-5 box-border max-w-full text-left text-21xl text-crimson-100 font-montserrat">
				<div className="w-[1170.4px] flex flex-row items-center justify-center [row-gap:20px] max-w-full mq1125:flex-wrap">
					<div className="flex-1 flex flex-col items-start justify-center py-5 px-0 box-border gap-[40px] min-w-[438px] max-w-full mq800:gap-[20px] mq800:min-w-full">
						<div className="relative font-semibold mq800:text-13xl mq450:text-5xl">
							About Us
						</div>
						<div className="self-stretch relative text-13xl text-black mq800:text-7xl mq450:text-lgi">
							Founded with a simple objective - to help people find happiness,
							Find Your Partner offers personalized matchmaking services to
							cater to diverse preferences and cultures, all for free.
							<br></br>
							<div>
								<Button
									text="Sign Up for Free!"
									type="submit"
									className="self-stretch rounded-3xs bg-crimson-100 overflow-hidden flex flex-row items-start justify-center py-[13.5px] px-5 text-11xl text-white"
								/>
							</div>
						</div>
					</div>
					<img
						className="w-[592.4px] relative max-h-full max-w-full z-[1] ml-[-96px] mq1125:flex-1 mq1125:ml-0"
						loading="lazy"
						alt="test"
						src="/group-3.svg"
					/>
				</div>
			</section>
			<section className="w-[1379px] flex flex-row items-start justify-center pt-0 px-5 pb-[142.8px] box-border max-w-full text-left text-13xl text-crimson-100 font-montserrat mq800:pb-[93px] mq800:box-border">
				<div className="self-stretch relative mq800:text-8xl mq450:text-lgi">
					Your story is waiting to happen! Join the millions of happy couples
					who found love through Find Your Partner, without spending a dime,
				</div>
				<div className="self-stretch relative mq800:text-8xl mq450:text-lgi">
					Find Your Partner has touched millions of lives with its trusted
					matchmaking service, and it&apos;s all free of cost.
				</div>
				<div className="self-stretch relative mq800:text-8xl mq450:text-lgi">
					Join our community on social media and stay updated with the latest
					news, success stories, and matchmaking tips, all for free.
				</div>
			</section>
		</div>
	);
};

export default HomePage;
