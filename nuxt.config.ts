// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  	devtools: { enabled: true },
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
			],
		}
	},
})
