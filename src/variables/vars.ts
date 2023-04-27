import { colors } from './colors';
import { theme } from '../stitches';

export const vars = {
	colors: {
		...colors.scales,
		...colors.backgrounds,
		...colors.contents,
	},
	spaces: {
		size8: `${theme.space.size8.token}`,
		size16: `${theme.space.size16.token}`,
		size24: `${theme.space.size24.token}`,
		size32: `${theme.space.size32.token}`,
		size40: `${theme.space.size40.token}`,
		size48: `${theme.space.size48.token}`,
		size56: `${theme.space.size56.token}`,
		size64: `${theme.space.size64.token}`,
	},
	sizes: {
		size8: `${theme.sizes.size8.token}`,
		size16: `${theme.sizes.size16.token}`,
		size24: `${theme.sizes.size24.token}`,
		size32: `${theme.sizes.size32.token}`,
		size64: `${theme.sizes.size64.token}`,
		size96: `${theme.sizes.size96.token}`,
		size104: `${theme.sizes.size104.token}`,
		size128: `${theme.sizes.size128.token}`,
	},
};
