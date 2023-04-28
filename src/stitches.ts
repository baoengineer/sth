import { createStitches } from '@stitches/react';
import { grass } from '@radix-ui/colors';

export const { theme, styled } = createStitches({
	prefix: 'sth',
	theme: {
		colors: {
			// Scales
			scale1: grass.grass1,
			scale2: grass.grass2,
			scale3: grass.grass3,
			scale4: grass.grass4,
			scale5: grass.grass5,
			scale6: grass.grass6,
			scale7: grass.grass7,
			scale8: grass.grass8,
			scale9: grass.grass9,
			scale10: grass.grass10,
			scale11: grass.grass11,
			scale12: grass.grass12,

			// Backgrounds
			background: grass.grass1,
			background2: grass.grass2,

			// Content
			content: grass.grass12,
			content2: grass.grass11,

			// Border
			border: grass.grass8,
			border2: grass.grass12,
		},
		space: {
			size8: '8px',
			size16: '16px',
			size24: '24px',
			size32: '32px',
			size40: '40px',
			size48: '48px',
			size56: '56px',
			size64: '64px',
		},
		sizes: {
			size8: '8px',
			size16: '16px',
			size24: '24px',
			size32: '32px',
			size64: '64px',
			size96: '96px',
			size104: '104px',
			size128: '128px',
		},
		radii: {
			1: '2px',
			2: '4px',
			3: '8px',
			round: '9999px',
		},
		fonts: {
			sans: 'Space Grotesk, sans-serif',
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

export type Theme = typeof theme;
