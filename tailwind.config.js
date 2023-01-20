/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	  ],
	theme: {
		extend: {
		  colors: {
		  'special-red': '#d9362c',
		  'dark-special-red': '#b82e25',
		  'footer-bg': '#0f1e2a',
		  'assurance-blue': '#007cc2',
		  'brand-secondary': '#63669E',
		  'brand-dark': '#10162B',
		  'brand-cyan': '#78D5F7',
		  'brand-blue': '#5D96D9',
		  'brand-gray-medium': '#D9DADF',
		  'brand-gray-light': '#F5F7FA',
		  'brand-gray-dark': '#4B4F63',
		  'brand-gray': '#878B9C',
		  'brand-purple': '#B587E0',
		  'brand-light-green': '#99F6E4'
		  },
		},
	},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
