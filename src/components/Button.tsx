import React, { FC } from 'react';

import { styled } from '../stitches';
import { vars } from '../variables';

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
				color: vars.colors.content,
				backgroundColor: 'transparent',
				'&:hover': {
					backgroundColor: vars.colors.scale4,
				},
			},
			accent: {
				color: vars.colors.content,
				backgroundColor: vars.colors.scale3,
				'&:hover': {
					backgroundColor: vars.colors.scale4,
				},
				'&:active': {
					backgroundColor: vars.colors.scale5,
				},
				'&:disabled': {
					backgroundColor: vars.colors.scale2,
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
