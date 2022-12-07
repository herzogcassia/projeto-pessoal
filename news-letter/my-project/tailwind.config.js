/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#edede9',
				secundary: '#d6ccc2',
				creamNude: '#f5ebe0',
				lightBronw: '#e3d5ca',
				mediumNude: '#d5bdaf'
			}
		},
	},
	plugins: [],
};
