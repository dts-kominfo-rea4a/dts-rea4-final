/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", ...fontFamily.sans],
		},
	},
	plugins: [],
	tailwindConfig: "./styles/tailwind.config.js",
};
