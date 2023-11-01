/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue"
	],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				lg: '4rem',
				xl: '7rem',
				'2xl': '7rem',
			},
		},
		colors: {
			"transparent": "transparent",
			"white": "#FFFFFF",
			"black": "#000000",
			primary: {
                DEFAULT: "#891CE1",
				50: "#F8F1FD",
				100: "#F1E4FC",
				200: "#E3C9F8",
				300: "#D0A4F4",
				400: "#B877EE",
				500: "#891CE1",
				600: "#7919C8",
				700: "#6B16B1",
				800: "#5B1396",
				900: "#3A0C5F",
				950: "#260840"
			},
			"gray": {
				DEFAULT: "#6b7280",
				50: "#f9fafb",
				100: "#f3f4f6",
				200: "#e5e7eb",
				300: "#d1d5db",
				400: "#9ca3af",
				500: "#6b7280",
				600: "#4b5563",
				700: "#374151",
				800: "#1f2937",
				900: "#111827",
				950: "#030712"
			}
        }
	},
	plugins: [],
	darkMode: [
		"class"
	]
}

