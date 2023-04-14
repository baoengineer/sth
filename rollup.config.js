const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');
const pkg = require('./package.json');

const config = [
	{
		input: 'src/index.ts',
		output: [
			{
				name: 'sth',
				file: pkg.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: pkg.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			typescript({
				tsconfig: 'tsconfig.package.json',
			}),
			terser(),
		],
		external: [
			...Object.keys(pkg.dependencies || {}),
			...Object.keys(pkg.peerDependencies || {}),
		],
	},
];

module.exports = config;
