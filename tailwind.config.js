/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				custom: {
					colorOne: "#B39178",
				},
			},
		},
		fontFamily: {
			pop: ["Poppins"],
		},
	},
	plugins: [],
};
