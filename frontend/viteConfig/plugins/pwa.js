import { VitePWA } from 'vite-plugin-pwa';

const configPwaPlugin = (mode) => {
	const pwaOptions = {
		mode,
		base: '/',
		includeAssets: [
			'robots.txt',
		],
		manifest: {
			name: 'RGM Invoice Manager',
			short_name: 'Invoice Manager',
			description: 'Manage invoices for self employed households with multiple businesses',
			theme_color: '#720000',
			background_color: '#fff',
			icons: [
				{
					src: 'favicon.svg',
					sizes: '192x192',
					type: 'image/svg+xml',
				},
				{
					src: "favicon.svg",
					sizes: "512x512",
					type: "image/svg+xml",
				},
				{
					src: "favicon.svg",
					sizes: "512x512",
					type: "image/svg+xml",
					purpose: 'any maskable',
				},
			],
		},
		devOptions: {
			enabled: process.env.SW_DEV === 'true',
			type: 'module',
			navigateFallback: 'index.html',
		},
	};

	const replaceOptions = { __DATE__: new Date().toISOString() }
	const claims = process.env.CLAIMS === 'true'
	const reload = process.env.RELOAD_SW === 'true'
	const selfDestroying = process.env.SW_DESTROY === 'true'

	if (process.env.SW === 'true') {
		pwaOptions.srcDir = 'src'
		pwaOptions.filename = claims ? 'claims-sw.js' : 'prompt-sw.js'
		pwaOptions.strategies = 'injectManifest'
			; (pwaOptions.manifest).name = 'PWA Inject Manifest'
			; (pwaOptions.manifest).short_name = 'PWA Inject'
	}

	if (claims)
		pwaOptions.registerType = 'autoUpdate';

	if (reload) {
		// @ts-expect-error overrides
		replaceOptions.__RELOAD_SW__ = 'true'
	}

	if (selfDestroying)
		pwaOptions.selfDestroying = selfDestroying;

	return VitePWA(pwaOptions);
}

export default configPwaPlugin;
