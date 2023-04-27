import { createStitches } from '@stitches/react';
import { grass } from '@radix-ui/colors';

export const { theme, styled } = createStitches({
	prefix: 'sth',
	theme: {
		colors: {
			...grass,

			// Scales
			scale1: '$grass1',
			scale2: '$grass2',
			scale3: '$grass3',
			scale4: '$grass4',
			scale5: '$grass5',
			scale6: '$grass6',
			scale7: '$grass7',
			scale8: '$grass8',
			scale9: '$grass9',
			scale10: '$grass10',
			scale11: '$grass11',
			scale12: '$grass12',

			// Backgrounds
			background: '$grass1',
			background2: '$grass2',

			// Content
			content: '$grass12',
			content2: '$grass11',

			// Border
			border: '$grass8',
			border2: '$grass6',
		},
		space: {
			1: '8px',
			2: '16px',
			3: '24px',
			4: '32px',
			5: '40px',
			6: '48px',
			7: '56px',
			8: '64px',
			9: '96px',
			10: '104px',
		},
		sizes: {
			1: '4px',
			2: '8px',
			3: '16px',
			4: '32px',
			5: '64px',
		},
		radii: {
			1: '2px',
			2: '4px',
			3: '8px',
			round: '9999px',
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
