import { theme } from '@/src/stitches';

export const getCSSVarName = (token: string, type: string | number) => {
	console.log(theme);
	const tokens = theme[type] || {};
	const { prefix, scale } = tokens[token] || {};
	return `--${prefix}-${scale}-${token}`;
};
