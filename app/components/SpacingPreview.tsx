import { FC } from 'react';
import { styled } from '../../src/stitches';
import { vars } from '@/src/variables';
import { getCSSVarName } from '@/app/helpers';

interface Props {
	value: string;
	token: string;
}

const Root = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '16px',
});

const SizeBox = styled('div', {
	width: vars.spaces.size24,
	height: vars.spaces.size24,
	backgroundColor: vars.colors.scale12,
});

export const SpacingPreview: FC<Props> = ({ value, token }) => {
	return (
		<Root>
			<SizeBox
				css={{
					width: value,
					height: value,
				}}
			/>
			<div>{token}</div>
			<div>{value}</div>
			<div>{getCSSVarName(token, 'space')}</div>
		</Root>
	);
};
