import { defineConfig, loadEnv } from 'vite';
import configBuild from './viteConfig/build';
import configResolve from './viteConfig/resolve';
import configServer from './viteConfig/server';
import configPlugins from './viteConfig/plugins';

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	const DOMAIN = mode === 'development'
		? env.VITE_DOMAIN_DEV
		: env.VITE_DOMAIN_PROD;

	if (command === 'serve') {
		return {
			plugins: configPlugins(mode),
			server: configServer(DOMAIN),
			resolve: configResolve(__dirname),
			build: configBuild(),
			test: {
				globals: true,
				environment: 'jsdom',
				setupFiles: './vitest.setup.js'
			}
		}
	} else {
		return {
			plugins: configPlugins(mode),
			server: configServer(DOMAIN),
			resolve: configResolve(__dirname),
			build: configBuild(),
		}
	}
});