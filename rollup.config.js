const jsx = require('acorn-jsx');
const typescript = require('rollup-plugin-typescript2');
const copy = require('rollup-plugin-copy');
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
		acornInjectPlugins: [jsx()],
		plugins: [
			typescript({
				tsconfig: 'tsconfig.package.json',
			}),
			copy({
				targets: [
					{ src: 'package.json', dest: 'dist' },
					{ src: 'CHANGELOG.md', dest: 'dist' },
					{ src: 'README.md', dest: 'dist' },
				],
			}),
		],
		external: [
			...Object.keys(pkg.dependencies || {}),
			...Object.keys(pkg.peerDependencies || {}),
		],
	},
];

module.exports = config;
