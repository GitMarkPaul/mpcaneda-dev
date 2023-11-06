// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  	devtools: { enabled: true },
	experimental: {
		payloadExtraction: false
	},
	css: [
		'~/assets/css/main.css'
	],
	postcss: {
		plugins: {
			'postcss-import': {},
    		'tailwindcss/nesting': {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: [
		'@nuxtjs/color-mode',
		'@pinia/nuxt',
		'@nuxt/image',
	],
	colorMode: {
		classSuffix: ''
	},
	app: {
		baseURL: '/mpcaneda-dev/',
    	buildAssetsDir: 'assets',
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			meta: [
				{
					name: 'robots',
					content: 'index, follow'
				},
				{
					name: 'googlebot',
					content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
				},
				{
					name: 'bingbot',
					content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
				},
				{
					name: 'description',
					content: 'I create beautiful websites your users will love'
				}
			],
			link: [
				{
					rel: 'icon',
					type: 'image/png',
					href: 'favicon.ico',
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: 'anonymous'
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
				},
			],
		}
	},
	image: {
		dir: 'assets/img',
		inject: true,
		format: [
			'webp'
		]
	}
})
