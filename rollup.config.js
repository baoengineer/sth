const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');

const config = [
	{
		input: 'src/package/index.ts',
		output: [
			{
				file: 'dist/sth.js',
				format: 'esm',
				sourcemap: true,
			},
			{
				file: 'dist/sth.min.js',
				format: 'esm',
				sourcemap: true,
				plugins: [terser()],
			},
		],
		plugins: [
			typescript({
				tsconfig: 'tsconfig.package.json',
				declaration: true,
				declarationDir: 'dist',
				outDir: 'dist',
			}),
		],
		external: (id) => !/^[./]/.test(id),
	},
];

module.exports = config;
