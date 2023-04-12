import { styled } from '../../../stitches.config';
import type { CSSProperties } from 'react';

type ButtonProps = {
	children: React.ReactNode;
	style?: CSSProperties;
};

export const Button = styled('button', {
	borderRadius: '$round',
	fontSize: '$4',
	padding: '$2 $3',
	border: '2px solid $turq',
	color: '$white',

	'&:hover': {
		backgroundColor: '$turq',
		color: '$black',
	},
});

export default Button;

export type { ButtonProps };
