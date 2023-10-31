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
                DEFAULT: "#1DE093",
				50: "#F1FDF9",
				100: "#DFFBF0",
				200: "#BBF6DF",
				300: "#93F1CB",
				400: "#61EBB4",
				500: "#1DE093",
				600: "#1ACB84",
				700: "#17B073",
				800: "#139561",
				900: "#0E6C47",
				950: "#0B5135"
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

