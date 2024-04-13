/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				white: "#fff",
				crimson: {
					100: "#c41941",
					200: "rgba(196, 25, 65, 0.29)",
					300: "rgba(196, 25, 65, 0.72)",
				},
				black: "#000",
				gray: "rgba(30, 30, 30, 0.36)",
			},
			spacing: {},
			fontFamily: {
				montserrat: "Montserrat",
				montaga: "Montaga",
			},
			borderRadius: {
				"3xs": "10px",
				"8xs": "5px",
			},
		},
		fontSize: {
			"13xl": "32px",
			"7xl": "26px",
			lgi: "19px",
			xl: "20px",
			"5xl": "24px",
			"29xl": "48px",
			"19xl": "38px",
			"10xl": "29px",
			"21xl": "40px",
			base: "16px",
			inherit: "inherit",
		},
		screens: {
			mq1350: {
				raw: "screen and (max-width: 1350px)",
			},
			mq1275: {
				raw: "screen and (max-width: 1275px)",
			},
			mq1225: {
				raw: "screen and (max-width: 1225px)",
			},
			mq1125: {
				raw: "screen and (max-width: 1125px)",
			},
			mq1100: {
				raw: "screen and (max-width: 1100px)",
			},
			mq1050: {
				raw: "screen and (max-width: 1050px)",
			},
			mq800: {
				raw: "screen and (max-width: 800px)",
			},
			mq750: {
				raw: "screen and (max-width: 750px)",
			},
			mq450: {
				raw: "screen and (max-width: 450px)",
			},
		},
	},
	plugins: [],
};
