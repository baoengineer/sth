import { createStitches } from '@stitches/react';
import { gray } from '@radix-ui/colors';

export const { theme, styled } = createStitches({
	theme: {
		colors: {
			...gray,

			// Backgrounds
			background: '$gray1',
			background2: '$gray2',

			// Content
			content: '$gray12',
			content2: '$gray11',
		},
		fonts: {
			sans: 'Inter, sans-serif',
		},
		fontSizes: {
			1: '12px',
			2: '14px',
			3: '16px',
			4: '20px',
			5: '24px',
			6: '32px',
		},
		space: {
			1: '4px',
			2: '8px',
			3: '16px',
			4: '32px',
			5: '64px',
			6: '128px',
		},
		sizes: {
			1: '4px',
			2: '8px',
			3: '16px',
			4: '32px',
			5: '64px',
			6: '128px',
		},
		radii: {
			1: '2px',
			2: '4px',
			3: '8px',
			round: '9999px',
		},
		fontWeights: {},
		lineHeights: {},
		letterSpacings: {},
		borderWidths: {},
		borderStyles: {},
		shadows: {},
		zIndices: {},
		transitions: {},
	},
});
