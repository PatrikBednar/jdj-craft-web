/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					black: '#111111',
					gray: '#262626',
					brick: '#C64936',
					'brick-dark': '#A83B2A',
				}
			},
			fontFamily: {
				heading: ['Oswald', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
			},
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
		},
	},
	plugins: [],
}