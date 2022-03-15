import styled from 'styled-components';
import { colors } from '../../assets/templateVars';

export const ParallaxBase = styled.div`
	width: 250px;
	height: 250px;
	border-radius: 50%;
	border: 1px solid white;
	animation: Float 10s linear infinite;
	box-shadow: 0 0 10px 10px ${colors.teritariry};
	position: absolute;
	transition: 0.3s;
	z-index: -1;

	@keyframes Float {
		0% {
			transform: translate(0, 0);
			box-shadow: 0 0 10px 10px ${colors.teritariry};
		}

		25% {
			transform: translate(20px, 20px);
			box-shadow: 0 0 20px 10px ${colors.teritariry};
		}

		50% {
			transform: translate(40px, 0);
			box-shadow: 0 0 30px 15px ${colors.teritariry};
		}

		75% {
			transform: translate(-20px, 10px);
			box-shadow: 0 0 20px 20px ${colors.teritariry};
		}

		100% {
			transform: translate(0, 0);
			box-shadow: 0 0 10px 10px ${colors.teritariry};
		}
	}
`;
