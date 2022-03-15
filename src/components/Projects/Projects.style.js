import styled from 'styled-components';
import { colors } from '../../assets/templateVars';
import { ParallaxBase } from '../Parallax/Parallax.style';

export const ProjectsBase = styled.div`
	${ParallaxBase} {
		z-index: 10;
	}

	${ParallaxBase}:first-child {
		left: 60px;
	}

	${ParallaxBase}:nth-child(2) {
		right: 90px;
		animation-delay: 2s;
	}

	${ParallaxBase}:nth-child(3) {
		left: 90px;
		animation-delay: 4s;
	}

	${ParallaxBase}:nth-child(4) {
		right: 90px;
		animation-delay: 6s;
	}

	${ParallaxBase}:nth-child(5) {
		left: 90px;
		animation-delay: 2s;
	}

	${ParallaxBase}:nth-child(6) {
		right: 90px;
		animation-delay: 4s;
	}

	${ParallaxBase}:nth-child(7) {
		left: 90px;
		animation-delay: 6s;
	}

	.block-inner {
		display: flex;
		justify-content: center;
		width: 50%;
		margin: 30px auto 100px;
		flex-direction: column;
		align-items: center;
		text-decoration: none !important;
		text-align: center;
		position: relative;
	}

	.block-inner:hover ~ .project-hover {
		opacity: 1;
		pointer-events: all;
	}

	.project-hover:hover {
		opacity: 1;
		pointer-events: all;
	}

	.projects-block {
		position: relative;

		.image-wrapper {
			position: relative;

			img {
				height: 150px;
				width: auto;
				display: block;
				margin: auto;
			}
		}

		p {
			color: #f4f4f4;
			text-decoration: none !important;
			margin-top: 20px;
		}
	}

	.invert {
		img {
			filter: invert(1);
		}
	}

	.white {
		img {
			filter: grayscale(1) invert(1) brightness(5);
		}
	}

	.project-hover {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: #121212;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		opacity: 0;
		pointer-events: none;
		transition: all 0.3s ease-in-out;

		h4 {
			margin-bottom: 30px;
			font-size: 50px;
			user-select: none;
			text-shadow: 0 0 5px ${colors.textShadow};
		}

		a {
			text-decoration: none;
		}
	}

	.small .image-wrapper {
		img {
			display: flex;
			width: 350px;
			height: auto;
			margin: auto;
		}
	}

	.ps {
		width: 50%;
		text-align: center;
		margin: 50px auto;
		font-size: 14px;
	}
`;
