import styled from 'styled-components';
import { colors } from '../../assets/templateVars';

export const HomeBase = styled.div`
	animation: SlideFromUp 0.3s linear;
`;

export const Screen = styled.div`
	width: 800px;
	height: 600px;
	margin: 40px auto;
	border: 5px solid white;
	border-radius: 10px;
	box-shadow: 0 0 40px 10px ${colors.teritariry};
	display: flex;
	align-items: center;

	.loader {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		border: 3px solid white;
		margin: auto;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		&:before {
			content: '';
			width: 100px;
			height: 100px;
			border-radius: 50%;
			border: 3px solid white;
			position: absolute;
		}

		&:after {
			content: '';
			width: 50px;
			height: 50px;
			border-radius: 50%;
			border: 3px solid white;
			position: absolute;
		}
	}
`;
