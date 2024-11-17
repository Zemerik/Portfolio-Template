const FONT = "'Outfit Variable', sans-serif";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			body: FONT,
			heading: FONT,
			sans: FONT,
			fancy: '"Source Sans Pro", sans-serif'
		},
		extend: {
			boxShadow: {
				floating: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
				'floating-xl': 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'
			}
		}
	},
	plugins: [require('daisyui'), require('tailwindcss-animate')],
	daisyui: {
		themes: ['dark']
	}
};
