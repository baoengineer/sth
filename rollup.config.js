const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');
const copy = require('rollup-plugin-copy');
const postcss = require('rollup-plugin-postcss');
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
			copy({
				targets: [
					{ src: 'package.json', dest: 'dist' },
					{ src: 'CHANGELOG.md', dest: 'dist' },
					{ src: 'README.md', dest: 'dist' },
				],
			}),
			postcss({
				extract: true,
				minimize: true,
			}),
		],
		external: [
			...Object.keys(pkg.dependencies || {}),
			...Object.keys(pkg.peerDependencies || {}),
		],
	},
];

module.exports = config;
