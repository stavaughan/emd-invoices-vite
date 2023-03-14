import path from 'path';

const configResolve = (myDirname) => {
	const pathResolve = (dir) => path.resolve(myDirname, '.', dir);
	const viteResolve = {
		alias: {
			'@': pathResolve('src'),
			'~': pathResolve('node_modules'),
			'~bootstrap': pathResolve('node_modules/bootstrap'),
		},
		extensions: [
			'.mjs',
			'.js',
			'.jsx',
			'.json'
		],
	};

	return viteResolve;
};

export default configResolve;
