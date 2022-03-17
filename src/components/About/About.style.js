import styled from 'styled-components';
import { ParallaxBase } from '../Parallax/Parallax.style';
import { colors } from '../../assets/templateVars';

export const AboutBase = styled.div`
	animation: SlideFromUp 0.3s linear;
	width: 100%;
	height: 100%;

	text-align: center;
	padding-bottom: 100px;

	h3 {
		font-weight: bold;
		font-family: SpaceMono;
		margin-bottom: 20px;
	}

	.position {
		color: ${colors.textShadow};
	}

	${ParallaxBase}:first-child {
		left: 60px;
		animation-delay: 2s;
	}

	${ParallaxBase}:nth-child(2) {
		right: 90px;
	}

	${ParallaxBase}:nth-child(3) {
		left: 90px;
		animation-delay: 4s;
	}

	.image-wrapper {
		width: 300px;
		height: 100%;
		margin: 0 0 50px auto;
		position: relative;
		border: 1px solid white;
		transition: all 0.3s ease-in-out;
		border-radius: 80px;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.tech-info {
		text-align: left;

		h4 {
			display: flex;
			flex-wrap: nowrap;
			word-break: nowrap;
			align-items: center;
			position: static;
			font-weight: bold;
			font-family: SpaceMono;
			margin-bottom: 20px;

			&:after {
				content: '';
				width: calc(100% - 180px);
				height: 2px;
				background-color: ${colors.teritariry};
				margin-left: auto;
			}
		}
	}

	.soft-skills {
		h4 {
			font-weight: bold;
			font-family: SpaceMono;
			margin-bottom: 20px;
		}
	}
`;
