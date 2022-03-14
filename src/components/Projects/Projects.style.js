import styled from 'styled-components';
import { ParallaxBase } from '../Parallax/Parallax.style';

export const ProjectsBase = styled.div`
	${ParallaxBase} {
		width: 250px;
		height: 250px;
		border-radius: 50%;
		border: 1px solid white;
		box-shadow: 0 0 10px 10px green;
		position: absolute;
		transition: 0.3s;
		z-index: 10;
	}

	${ParallaxBase}:first-child {
		left: 60px;
	}

	${ParallaxBase}:nth-child(2) {
		right: 90px;
	}

	${ParallaxBase}:nth-child(3) {
		left: 90px;
	}

	${ParallaxBase}:nth-child(4) {
		right: 90px;
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

	.projects-block {
		position: relative;

		&:hover {
			.project-hover {
				opacity: 1;
				pointer-events: all;
			}
		}

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
			color: #fff;
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
		background: rgba(0, 0, 0, 1);
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
			text-shadow: 0 0 5px rgba(0 255 0);
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
