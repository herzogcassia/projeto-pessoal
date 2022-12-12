/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				abacate: '#ccd5ae',
				taruira: '#e9edc9',
				creamNude: '#fefae0',
				lightRose: '#faedcd',
				terracota: '#d4a373'
			}
		},
	},
	plugins: [],
};
