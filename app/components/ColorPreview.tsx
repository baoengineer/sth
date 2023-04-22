import { FC } from 'react';
import { theme, styled } from '../../src/stitches';
import { colord } from 'colord';

interface Color {
	value: string;
	token: string;
	scale: number;
}

interface Props {
	color: Color;
}

const Root = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '16px',
});

export const ColorPreview: FC<Props> = ({ color }) => {
	return (
		<Root>
			<div
				style={{
					width: '32px',
					height: '32px',
					backgroundColor: color?.value,
				}}
			/>
			<div>{color.token}</div>
			<div>{color.value}</div>
			<div>{colord(color.value).toHex()}</div>
		</Root>
	);
};
