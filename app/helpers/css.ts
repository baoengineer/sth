import { theme, Theme } from '@/src/stitches';

interface Tokens {
	[key: string]: {
		prefix: string;
		scale: string;
		token: string;
		value: string;
	};
}

export const getCSSVarName = (token: string, type: keyof Theme) => {
	const tokens: Tokens = theme[type] || {};
	const { prefix, scale } = tokens[token] || {};
	return `--${prefix}-${scale}-${token}`;
};
