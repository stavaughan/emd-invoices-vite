const configServer = (DOMAIN) => {
	const viteServer = {
		host: true,
		cors: true,
		proxy: {
			'/api': {
				target: DOMAIN,
				changeOrigin: true,
				secure: true,
			},
		},
	};
	return viteServer;
};

export default configServer;
