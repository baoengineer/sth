import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import pkg from './package.json';

const config = [
	{
		input: 'src/package/index.ts',
		output: {
			file: pkg.main,
			format: 'cjs',
			exports: 'named',
			sourcemap: true,
		},
		external: ['react', 'react-dom'],
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: 'node_modules/**',
				presets: ['@babel/preset-react'],
			}),
			typescript(),
			postcss({
				extract: true,
				modules: true,
				minimize: true,
			}),
			json(),
		],
	},
	{
		input: 'src/package/index.ts',
		output: {
			file: pkg.types,
			format: 'es',
		},
		plugins: [dts()],
	},
];

export default config;
