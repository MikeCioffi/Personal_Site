/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			white: "#f8fafc",
			"blue-light": "#06b6d4",
			blue: "#0284c7",
			red: "#f87171",
			"theme-primary-1": "#262626",
			"theme-primary-2": "#18181b",
			"theme-secondary-1": "#075985",
		},
		extend: {},
	},
	plugins: [],
}
