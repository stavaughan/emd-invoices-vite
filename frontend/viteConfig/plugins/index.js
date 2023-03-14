import react from '@vitejs/plugin-react';
import configPwaPlugin from './pwa';

const configPlugins = (mode) => {
	const vitePlugins = [];
	vitePlugins.push(
		react(),
		configPwaPlugin(mode)
	);

	return vitePlugins;
};

export default configPlugins;
