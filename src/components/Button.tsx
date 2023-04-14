import { styled } from '../helpers/stitches';

export const Button = styled('button', {
	borderRadius: '$round',
	fontSize: '$4',
	padding: '$2 $3',
	border: '1px solid $turq',
	color: '$white',

	'&:hover': {
		backgroundColor: '$turq',
		color: '$black',
	},
});

export default Button;
