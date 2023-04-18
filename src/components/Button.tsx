import { styled } from '../helpers/stitches';

export const Button = styled('button', {
	borderRadius: '$round',
	fontSize: '$4',
	padding: '$2 $3',
	border: '1px solid $black',
	backgroundColor: '$black',
	color: '$white',

	'&:hover': {
		opacity: '0.8',
	},
});
