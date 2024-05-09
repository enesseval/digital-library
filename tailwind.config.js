/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				custom: {
					colorOne: "#3A5A40",
					colorTwo100: "#DAD7CD",
					colorTwo200: "#c9c4b6",
					colorTwo300: "#b3ad98",
					colorTwo400: "#9d957b",
					colorThree: "#588157",
				},
			},
		},
		fontFamily: {
			pop: ["Poppins"],
		},
		minHeight:{
			'460':'460px'
		},
		maxHeight:{
			'460':'460px'
		},
		boxShadow:{
			"book-shadow": "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
			"book-shadow-hover" : "rgba(0, 0, 0, 0.35) 0px 5px 15px 0px"
		}
	},
	plugins: [],
};
