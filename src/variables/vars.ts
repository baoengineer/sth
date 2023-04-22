import { colors } from './colors';
import { theme } from '../stitches';

export const vars = {
	colors: {
		...colors.scales,
		...colors.backgrounds,
		...colors.contents,
	},
	spaces: {
		1: `${theme.space[1].token}`,
		2: `${theme.space[2].token}`,
		3: `${theme.space[3].token}`,
		4: `${theme.space[4].token}`,
		5: `${theme.space[5].token}`,
		6: `${theme.space[6].token}`,
		7: `${theme.space[7].token}`,
		8: `${theme.space[8].token}`,
		9: `${theme.space[9].token}`,
		10: `${theme.space[10].token}`,
	},
};
