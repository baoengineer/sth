import React, { FC } from 'react';

import { styled } from '../stitches';

interface Props {
	children: React.ReactNode;
	type: 'button' | 'submit' | 'reset';
	variant: 'neutral' | 'accent' | 'danger';
	onClick?: () => void;
	isDisabled: boolean;
}

const Root = styled('button', {
	borderColor: 'transparent',
	borderRadius: '$round',
	fontSize: '$4',
	padding: '$2 $3',
	variants: {
		variant: {
			neutral: {
				color: '$content',
				backgroundColor: 'transparent',
				'&:hover': {
					backgroundColor: '$gray4',
				},
			},
			accent: {
				color: '$content',
				backgroundColor: '$gray3',
				'&:hover': {
					backgroundColor: '$gray4',
				},
				'&:active': {
					backgroundColor: '$gray5',
				},
				'&:disabled': {
					backgroundColor: '$gray2',
				},
			},
			danger: {},
		},
		disabled: {
			true: {
				pointerEvents: 'none',
			},
		},
	},
});

export const Button: FC<Props> = ({
	children,
	type,
	variant = 'neutral',
	onClick,
	isDisabled,
}) => {
	return (
		<Root
			type={type}
			variant={variant}
			onClick={onClick}
			disabled={isDisabled}
		>
			{children}
		</Root>
	);
};
